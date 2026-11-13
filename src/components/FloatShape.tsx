import type { CSSProperties } from "react";
import { useParallax } from "../lib/scroll";

type Props = {
  kind: "cube" | "ring" | "prism";
  /** Tailwind positioning classes, e.g. "right-4 top-10". */
  className?: string;
  size?: number;
  /** How strongly it drifts against the scroll. */
  depth?: number;
  /** Seconds per full turn. */
  duration?: number;
};

const FACES = ["front", "back", "right", "left", "top", "bottom"];

/** A slowly turning wireframe solid that drifts at its own speed while you scroll. */
const FloatShape = ({ kind, className = "", size = 90, depth = 0.08, duration = 22 }: Props) => {
  const ref = useParallax<HTMLDivElement>(-depth);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`float-shape ${className}`}
      style={{ "--size": `${size}px`, "--dur": `${duration}s` } as CSSProperties}
    >
      <div className={`float-shape-body float-${kind}`}>
        {kind === "cube" && FACES.map((face) => <i key={face} className={`float-face float-face-${face}`} />)}
        {kind === "prism" && [0, 1, 2].map((n) => <i key={n} className={`float-tri float-tri-${n}`} />)}
      </div>
    </div>
  );
};

export default FloatShape;
