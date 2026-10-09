import { PROFILE } from "../data/profile";
import { portraitSrc } from "../lib/portrait";

const Portrait = ({ className = "" }: { className?: string }) => {
  if (!portraitSrc) return null;

  return (
    <img
      src={portraitSrc}
      alt={`Portrait of ${PROFILE.name}`}
      width={320}
      height={320}
      decoding="async"
      fetchPriority="high"
      className={`aspect-square rounded-full border border-line object-cover ${className}`}
    />
  );
};

export default Portrait;
