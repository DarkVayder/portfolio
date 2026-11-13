import { PROFILE } from "../data/profile";
import { portraitSrc } from "../lib/portrait";
import { useTilt } from "../lib/tilt";

// Floating badges at different depths. Real tools from the stack, not decoration.
const BADGES = [
  { label: "React", className: "portrait3d-badge portrait3d-badge-a" },
  { label: "TypeScript", className: "portrait3d-badge portrait3d-badge-b" },
  { label: "Node.js", className: "portrait3d-badge portrait3d-badge-c" },
];

const Portrait = ({ className = "" }: { className?: string }) => {
  const ref = useTilt<HTMLDivElement>({ max: 9, global: true });

  if (!portraitSrc) return null;

  return (
    <div ref={ref} className={`portrait3d ${className}`}>
      <div className="portrait3d-float">
        <div className="portrait3d-stage">
          <span aria-hidden="true" className="portrait3d-halo" />
          <span aria-hidden="true" className="portrait3d-orbit" />
          <img
            src={portraitSrc}
            alt={`Portrait of ${PROFILE.name}`}
            width={320}
            height={320}
            decoding="async"
            {...{ fetchpriority: "high" }}
            className="portrait3d-photo"
          />
          <span aria-hidden="true" className="portrait3d-glare" />
          {BADGES.map((badge) => (
            <span key={badge.label} aria-hidden="true" className={badge.className}>
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portrait;
