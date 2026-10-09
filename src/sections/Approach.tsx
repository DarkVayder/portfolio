import Section from "../components/Section";
import { PRINCIPLES } from "../data/profile";

const Approach = () => (
  <Section
    id="approach"
    eyebrow="Approach"
    title="How I work"
    intro="Four habits, each with the project where you can see it."
  >
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
      {PRINCIPLES.map((principle, index) => (
        <li key={principle.title} data-reveal className="bg-ink p-7 sm:p-8">
          <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-3 font-display text-xl font-medium text-paper">{principle.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{principle.body}</p>
        </li>
      ))}
    </ol>
  </Section>
);

export default Approach;
