import { useEffect, useRef } from "react";

/**
 * A soft light and a small ring that trail the cursor and swell over links and buttons.
 * Fine pointers only; the native cursor is never hidden.
 */
const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const ring = ringRef.current;
    if (!glow || !ring) return;
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const glowPos = { ...target };
    const ringPos = { ...target };
    let frame = 0;
    let active = false;

    const tick = () => {
      glowPos.x += (target.x - glowPos.x) * 0.08;
      glowPos.y += (target.y - glowPos.y) * 0.08;
      ringPos.x += (target.x - ringPos.x) * 0.22;
      ringPos.y += (target.y - ringPos.y) * 0.22;
      glow.style.transform = `translate3d(${glowPos.x}px, ${glowPos.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!active) {
        active = true;
        glow.classList.add("is-on");
        ring.classList.add("is-on");
        frame = requestAnimationFrame(tick);
      }
      const hovering = (event.target as Element | null)?.closest("a, button, [role=button]");
      ring.classList.toggle("is-hover", Boolean(hovering));
    };
    const onLeave = () => {
      active = false;
      cancelAnimationFrame(frame);
      glow.classList.remove("is-on");
      ring.classList.remove("is-on");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} aria-hidden="true" className="cursor-glow" />
      <div ref={ringRef} aria-hidden="true" className="cursor-ring" />
    </>
  );
};

export default CursorGlow;
