import type { CSSProperties, ReactNode } from "react";
import { useTilt } from "../lib/tilt";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
  style?: CSSProperties;
};

/** A card that tilts toward the pointer and catches a moving highlight. */
const TiltCard = ({ children, className = "", max = 8, style }: Props) => {
  const ref = useTilt<HTMLDivElement>({ max });

  return (
    <div ref={ref} style={style} className={`tilt-card ${className}`}>
      {children}
    </div>
  );
};

export default TiltCard;
