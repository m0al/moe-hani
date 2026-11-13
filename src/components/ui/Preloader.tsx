import { useEffect, useRef, useState } from "react";
import { gsap } from "../../lib/gsap";
import { profile } from "../../lib/content";
import styles from "./Preloader.module.css";

/**
 * Brief obsidian splash so the Hero's GSAP entrance timeline always starts
 * from a clean, intentional state instead of racing page/font load. Skipped
 * entirely under prefers-reduced-motion.
 */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) {
      onDone();
      return;
    }

    const el = ref.current;
    if (!el) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        onDone();
      },
    });

    tl.to(el.querySelector(`.${styles.mark}`), {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    })
      .to(el.querySelector(`.${styles.mark}`), {
        opacity: 1,
        duration: 0.35,
      })
      .to(el, {
        yPercent: -100,
        duration: 0.7,
        ease: "power4.inOut",
        delay: 0.1,
      });

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div ref={ref} className={styles.preloader} aria-hidden="true">
      <span className={styles.mark}>{profile.initials}</span>
    </div>
  );
}
