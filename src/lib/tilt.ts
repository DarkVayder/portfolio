import { useEffect, useRef } from "react";

type TiltOptions = {
  /** Maximum rotation in degrees. */
  max?: number;
  /** Track the pointer anywhere on the page instead of only over the element. */
  global?: boolean;
};

/**
 * Drives pointer-based 3D tilt through CSS variables (--rx, --ry, --mx, --my), so the
 * element and its children decide how to use them. Does nothing on touch devices and for
 * visitors who prefer reduced motion.
 */
export const useTilt = <T extends HTMLElement>({ max = 12, global = false }: TiltOptions = {}) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    let frame = 0;

    const apply = (rx: number, ry: number, mx: number, my: number) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
        el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
        el.style.setProperty("--mx", `${mx.toFixed(1)}%`);
        el.style.setProperty("--my", `${my.toFixed(1)}%`);
      });
    };

    const reset = () => {
      apply(0, 0, 50, 50);
      el.removeAttribute("data-tilting");
    };

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      // Over the element: relative to its box. Global: relative to the whole viewport.
      const nx = global ? event.clientX / window.innerWidth - 0.5 : (event.clientX - rect.left) / rect.width - 0.5;
      const ny = global ? event.clientY / window.innerHeight - 0.5 : (event.clientY - rect.top) / rect.height - 0.5;
      el.setAttribute("data-tilting", "");
      apply(-ny * max * 2, nx * max * 2, (nx + 0.5) * 100, (ny + 0.5) * 100);
    };

    const target: Window | HTMLElement = global ? window : el;
    target.addEventListener("pointermove", onMove as EventListener, { passive: true });
    if (global) document.documentElement.addEventListener("pointerleave", reset);
    else el.addEventListener("pointerleave", reset);

    return () => {
      cancelAnimationFrame(frame);
      target.removeEventListener("pointermove", onMove as EventListener);
      if (global) document.documentElement.removeEventListener("pointerleave", reset);
      else el.removeEventListener("pointerleave", reset);
    };
  }, [max, global]);

  return ref;
};

/**
 * Pointer position inside the element as --mx / --my, for a spotlight that follows the
 * cursor. No rotation, so it is safe on text-heavy cards.
 */
export const useSpotlight = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${(event.clientX - rect.left).toFixed(0)}px`);
        el.style.setProperty("--my", `${(event.clientY - rect.top).toFixed(0)}px`);
      });
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
    };
  }, []);

  return ref;
};

/** Pulls the element a few pixels toward the cursor while it is near. */
export const useMagnetic = <T extends HTMLElement>(strength = 0.28) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    let frame = 0;
    const move = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate(${(dx * strength).toFixed(1)}px, ${(dy * strength).toFixed(1)}px)`;
      });
    };
    const leave = () => {
      cancelAnimationFrame(frame);
      el.style.transform = "";
    };

    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [strength]);

  return ref;
};
