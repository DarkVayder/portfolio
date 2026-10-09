import Section from "../components/Section";
import { PROFILE } from "../data/profile";
import { TECH_GROUPS } from "../data/techstack";

const About = () => (
  <Section id="about" eyebrow="About" title="What I actually do">
    <div className="grid gap-12 lg:grid-cols-12">
      <div data-reveal className="flex flex-col gap-5 lg:col-span-7">
        {PROFILE.bio.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <div data-reveal className="lg:col-span-5">
        <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Tools I reach for</h3>
        <dl className="mt-5 flex flex-col">
          {TECH_GROUPS.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-line py-3 first:border-t-0 first:pt-0"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.1em] text-signal">{group.label}</dt>
              <dd className="text-sm leading-relaxed text-paper">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </Section>
);

export default About;
