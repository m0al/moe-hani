import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "../lib/gsap";

/**
 * Scopes a GSAP animation setup function to a ref'd DOM node and reverts
 * every tween/ScrollTrigger it created on cleanup — prevents animation
 * conflicts across React re-mounts (StrictMode double-invoke, fast refresh).
 *
 * Wrapped in gsap.matchMedia so prefers-reduced-motion gets its own branch:
 * elements animated `from()` a hidden state (opacity/transform) are snapped
 * straight to their visible end state instead of being skipped and left
 * permanently hidden.
 */
export function useGsapEffect<T extends HTMLElement>(
  callback: (context: gsap.Context, el: T) => void,
  deps: ReadonlyArray<unknown> = []
): RefObject<T | null> {
  const scopeRef = useRef<T | null>(null);

  useEffect(() => {
    if (!scopeRef.current) return;
    const el = scopeRef.current;
    const mm = gsap.matchMedia();

    mm.add(
      "(prefers-reduced-motion: no-preference)",
      (ctx) => callback(ctx, el as T),
      el
    );

    mm.add("(prefers-reduced-motion: reduce)", () => {
      // Only the scope root ever carries an inline pre-animation style
      // (e.g. Hero's `opacity: 0`); clearing it is enough to make content
      // visible without touching any CSS-module classes on descendants.
      gsap.set(el, { clearProps: "all" });
    });

    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scopeRef;
}
