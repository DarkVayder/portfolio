import type { CSSProperties } from "react";
import Section from "../components/Section";
import SpotCard from "../components/SpotCard";
import { PRINCIPLES } from "../data/profile";

const Approach = () => (
  <Section
    id="approach"
    index="03"
    eyebrow="Approach"
    title="How I work"
    intro="Four habits, each with the project where you can see it."
  >
    <ol className="grid gap-5 sm:grid-cols-2">
      {PRINCIPLES.map((principle, index) => (
        <li key={principle.title} data-reveal="flip" style={{ "--i": index } as CSSProperties}>
          <SpotCard className="principle h-full rounded-2xl border border-line bg-surface/55 p-7 backdrop-blur-sm sm:p-9">
            <span aria-hidden="true" className="principle-num">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="relative mt-2 font-display text-xl font-medium text-paper sm:text-2xl">{principle.title}</h3>
            <p className="relative mt-3 leading-relaxed text-muted">{principle.body}</p>
          </SpotCard>
        </li>
      ))}
    </ol>
  </Section>
);

export default Approach;
