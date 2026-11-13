import { TECH_GROUPS } from "../data/techstack";
import { useTilt } from "../lib/tilt";

const TOOLS = TECH_GROUPS.filter((group) => group.label !== "Design").flatMap((group) => group.items);

// Spread the words evenly over a sphere (Fibonacci lattice) and turn each to face outward.
// Pure maths, so the server and the client agree.
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const RADIUS_REM = 9;

const WORDS = TOOLS.map((label, i) => {
  const y = 1 - (i / (TOOLS.length - 1)) * 2;
  const ring = Math.sqrt(1 - y * y);
  const theta = i * GOLDEN_ANGLE;
  const x = Math.cos(theta) * ring;
  const z = Math.sin(theta) * ring;
  const azimuth = (Math.atan2(x, z) * 180) / Math.PI;
  const elevation = (Math.asin(y) * 180) / Math.PI;
  return {
    label,
    transform: `rotateY(${azimuth.toFixed(2)}deg) rotateX(${elevation.toFixed(2)}deg) translateZ(${RADIUS_REM}rem) translate(-50%, -50%)`,
  };
});

/** A slowly turning globe of the tools I use. Decorative: the list beside it has the same content. */
const TechGlobe = () => {
  const ref = useTilt<HTMLDivElement>({ max: 10, global: true });

  return (
    <div ref={ref} aria-hidden="true" className="globe">
      <div className="globe-tilt">
        <div className="globe-spin">
          {WORDS.map((word) => (
            <span key={word.label} className="globe-word" style={{ transform: word.transform }}>
              {word.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechGlobe;
