import { useEffect, useRef } from "react";

/**
 * Renders the final number (so the prerendered HTML is complete), then counts up to it the
 * first time it is on screen, once the intro screen has lifted.
 */
const CountUp = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const target = Number.parseInt(value, 10);
    if (!el || !Number.isFinite(target) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let wait = 0;
    let observer: IntersectionObserver | undefined;
    el.textContent = "0";

    const run = () => {
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / 1300, 1);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 4))));
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    const begin = () => {
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer?.disconnect();
        run();
      });
      observer.observe(el);
    };

    // Hold off while the intro screen is up, then start.
    const root = document.documentElement;
    const check = () => {
      if (root.classList.contains("ld-active") && !root.classList.contains("ld-done")) wait = window.setTimeout(check, 150);
      else wait = window.setTimeout(begin, 450);
    };
    check();

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(wait);
      observer?.disconnect();
      el.textContent = value;
    };
  }, [value]);

  return <span ref={ref}>{value}</span>;
};

export default CountUp;
