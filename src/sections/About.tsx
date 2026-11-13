import FloatShape from "../components/FloatShape";
import Section from "../components/Section";
import TechGlobe from "../components/TechGlobe";
import { PROFILE } from "../data/profile";
import { TECH_GROUPS } from "../data/techstack";

const About = () => (
  <Section
    id="about"
    index="04"
    eyebrow="About"
    title="What I actually do"
    decor={<FloatShape kind="cube" size={70} depth={0.12} duration={18} className="right-[9%] top-20 hidden lg:block" />}
  >
    <div className="grid gap-14 lg:grid-cols-12">
      <div data-reveal="left" className="flex flex-col gap-5 lg:col-span-6">
        {PROFILE.bio.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}

        <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted">Tools I reach for</h3>
        <dl className="flex flex-col">
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

      <div data-reveal="scale" className="flex items-center justify-center lg:col-span-6">
        <TechGlobe />
      </div>
    </div>
  </Section>
);

export default About;
