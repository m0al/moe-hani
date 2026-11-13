import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders every section without throwing", () => {
    // `main` starts aria-hidden until the Preloader's GSAP timeline
    // completes, which depends on real rAF timing jsdom doesn't drive —
    // so this asserts on the DOM tree directly rather than accessible
    // roles, which the hidden attribute would otherwise mask.
    const { container } = render(<App />);

    expect(container.querySelector("h1")).not.toBeNull();
    expect(container.querySelectorAll("h2").length).toBeGreaterThan(0);
    expect(container.textContent).toContain("Featured Projects");
    expect(container.textContent).toContain("FoodiePoint");
    expect(container.textContent).toContain("Max Taxi");
    expect(container.textContent).toContain("TopMax Travel");
    expect(container.textContent).toContain("AMC Medical Center");
    expect(container.textContent).toContain("Legal Management System");
    expect(container.textContent).toContain("Bokey");
    expect(container.querySelector("form")).not.toBeNull();
  });
});
