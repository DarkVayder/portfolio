import { TECH_GROUPS } from "../data/techstack";

const ITEMS = TECH_GROUPS.flatMap((group) => group.items);

const Track = () => (
  <div className="flex shrink-0 items-center gap-10 pr-10">
    {ITEMS.map((item, index) => (
      <span key={`${item}-${index}`} className="flex items-center gap-10 whitespace-nowrap">
        <span className="font-display text-2xl text-muted/70 sm:text-3xl">{item}</span>
        <span className="text-signal">/</span>
      </span>
    ))}
  </div>
);

const TechMarquee = () => {
  return (
    <div className="group relative w-screen overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Track />
        <Track />
      </div>
    </div>
  );
};

export default TechMarquee;
