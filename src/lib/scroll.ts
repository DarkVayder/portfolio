import { useEffect, useRef } from "react";

/** Publishes the scroll position as --sy on <html>, for CSS parallax: calc(var(--sy) * -0.06px). */
export const useScrollVars = () => {
  useEffect(() => {
    let frame = 0;
    const root = document.documentElement;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => root.style.setProperty("--sy", String(Math.round(window.scrollY))));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);
};

/**
 * Sets --fill (0 to 1) on an element: how far the viewport's reading line has travelled
 * through it. Drives scroll-filled timelines.
 */
export const useScrollFill = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const line = window.innerHeight * 0.55;
        const fill = Math.min(Math.max((line - rect.top) / Math.max(rect.height, 1), 0), 1);
        el.style.setProperty("--fill", fill.toFixed(4));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return ref;
};

/**
 * Sets --py (px) on an element from how far its centre is from the middle of the viewport,
 * so it drifts against the scroll relative to where it sits, not to the page top.
 */
export const useParallax = <T extends HTMLElement>(factor: number) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * factor;
        el.style.setProperty("--py", `${offset.toFixed(1)}px`);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [factor]);

  return ref;
};
