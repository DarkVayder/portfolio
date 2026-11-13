import type { CSSProperties } from "react";
import FloatShape from "../components/FloatShape";
import Section from "../components/Section";
import SpotCard from "../components/SpotCard";
import { EXPERIENCES } from "../data/experience";
import { useScrollFill } from "../lib/scroll";

const featured = EXPERIENCES.filter((item) => item.highlights?.length);
const earlier = EXPERIENCES.filter((item) => !item.highlights?.length);

const Experience = () => {
  const timelineRef = useScrollFill<HTMLOListElement>();

  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I've shipped"
      decor={<FloatShape kind="prism" size={110} depth={0.07} duration={26} className="right-[3%] top-20 hidden lg:block" />}
    >
      <ol ref={timelineRef} className="timeline relative flex flex-col gap-8">
        <li aria-hidden="true" className="timeline-rail">
          <span className="timeline-fill" />
        </li>
        {featured.map((item, index) => (
          <li
            key={`${item.company}-${item.period}`}
            data-reveal="right"
            style={{ "--i": index } as CSSProperties}
            className="timeline-item relative pl-9 sm:pl-14"
          >
            <span aria-hidden="true" className="timeline-dot" />
            <SpotCard className="rounded-2xl border border-line bg-surface/55 p-6 backdrop-blur-sm sm:p-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-signal">
                {item.period}
              </p>
              <h3 className="mt-4 font-display text-xl font-medium text-paper sm:text-2xl">
                {item.role} <span className="text-muted">· {item.company}</span>
              </h3>
              <ul className="mt-5 flex max-w-3xl flex-col gap-2.5">
                {item.highlights?.map((highlight) => (
                  <li key={highlight} className="relative pl-5 leading-relaxed text-muted">
                    <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2.5 bg-signal" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <li key={tech} className="chip chip-pop">
                    {tech}
                  </li>
                ))}
              </ul>
            </SpotCard>
          </li>
        ))}
      </ol>

      {earlier.length > 0 && (
        <div data-reveal="up" className="mt-10 rounded-2xl border border-line bg-surface/40 p-6 sm:p-8 lg:grid lg:grid-cols-12 lg:gap-12">
          <h3 className="font-mono text-sm text-muted lg:col-span-4">Also</h3>
          <ul className="mt-4 flex flex-col lg:col-span-8 lg:mt-0">
            {earlier.map((item) => (
              <li
                key={`${item.company}-${item.period}`}
                className="flex flex-col gap-1 border-t border-line py-4 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <p className="text-paper">
                  {item.role} <span className="text-muted">· {item.company}</span>
                </p>
                <p className="shrink-0 font-mono text-xs text-muted">
                  {item.technologies.join(", ")} · {item.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
};

export default Experience;
