import "@testing-library/jest-dom/vitest";

// jsdom has no layout engine, so IntersectionObserver/ResizeObserver and
// matchMedia are absent — the app relies on all three (scroll-spy, Lenis
// dimension tracking, reduced-motion checks).
class MockObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = MockObserver as unknown as typeof IntersectionObserver;
window.ResizeObserver = MockObserver as unknown as typeof ResizeObserver;

// jsdom's canvas has no real 2D context implementation; the interactive
// grid background degrades to a no-op draw loop under test, which is fine
// since we're only asserting the app mounts without throwing.
HTMLCanvasElement.prototype.getContext = (() =>
  null) as typeof HTMLCanvasElement.prototype.getContext;

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
