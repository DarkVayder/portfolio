import { useEffect, useRef } from "react";

const readColors = () => {
  const style = getComputedStyle(document.documentElement);
  const channel = (name: string) => `rgb(${style.getPropertyValue(name).trim().split(/\s+/).join(",")})`;
  return { signal: channel("--color-signal"), muted: channel("--color-muted") };
};

const hasWebGL = () => {
  try {
    const probe = document.createElement("canvas");
    return Boolean(probe.getContext("webgl2") || probe.getContext("webgl"));
  } catch {
    return false;
  }
};

/**
 * Decorative 3D backdrop for the hero. Client-only: the prerendered HTML contains just the
 * empty host, so there is nothing to hydrate and nothing to block the first paint. It stays
 * out of the way for reduced-motion users and browsers without WebGL.
 */
const HeroScene = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !hasWebGL()) return;

    let cancelled = false;
    let cleanup = () => {};

    import("../lib/scene3d")
      .then(({ createHeroScene }) => {
        if (cancelled) return;

        const canvas = document.createElement("canvas");
        canvas.className = "hero-scene-canvas";
        host.appendChild(canvas);

        const lowPower = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
        const scene = createHeroScene(canvas, host, { ...readColors(), lowPower });

        // Only spend frames while the hero is on screen and the tab is visible.
        let inView = true;
        const sync = () => scene.setRunning(inView && !document.hidden);
        const observer = new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting;
          sync();
        });
        observer.observe(host);
        document.addEventListener("visibilitychange", sync);

        // Follow the light/dark toggle.
        const themeObserver = new MutationObserver(() => scene.setColors(readColors()));
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        sync();
        requestAnimationFrame(() => canvas.classList.add("is-ready"));

        cleanup = () => {
          observer.disconnect();
          themeObserver.disconnect();
          document.removeEventListener("visibilitychange", sync);
          scene.dispose();
          canvas.remove();
        };
      })
      .catch(() => {
        // A failed chunk or context loss just leaves the CSS glow behind.
      });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <div ref={hostRef} aria-hidden="true" className="hero-scene" />;
};

export default HeroScene;
