import type { CSSProperties, ElementType, ReactNode } from "react";
import { useSpotlight } from "../lib/tilt";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
  id?: string;
  "aria-labelledby"?: string;
  "data-reveal"?: string;
};

/** A card with a glow that follows the cursor and lights up its border. */
const SpotCard = ({ children, className = "", as: Tag = "div", ...rest }: Props) => {
  const ref = useSpotlight<HTMLElement>();
  return (
    <Tag ref={ref} className={`spot-card ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default SpotCard;
