import Section from "../components/Section";
import { EXPERIENCES } from "../data/experience";

const featured = EXPERIENCES.filter((item) => item.highlights?.length);
const earlier = EXPERIENCES.filter((item) => !item.highlights?.length);

const Experience = () => (
  <Section id="experience" eyebrow="Experience" title="Where I've shipped">
    <ol className="flex flex-col">
      {featured.map((item) => (
        <li
          key={`${item.company}-${item.period}`}
          data-reveal
          className="grid gap-3 border-t border-line py-9 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-12"
        >
          <p className="font-mono text-sm text-muted lg:col-span-4">{item.period}</p>

          <div className="lg:col-span-8">
            <h3 className="font-display text-xl font-medium text-paper">
              {item.role} <span className="text-muted">· {item.company}</span>
            </h3>
            <ul className="mt-4 flex max-w-2xl flex-col gap-2.5">
              {item.highlights?.map((highlight) => (
                <li key={highlight} className="relative pl-5 leading-relaxed text-muted">
                  <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2.5 bg-signal" />
                  {highlight}
                </li>
              ))}
            </ul>
            <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>

    {earlier.length > 0 && (
      <div data-reveal className="mt-4 border-t border-line pt-9 lg:grid lg:grid-cols-12 lg:gap-12">
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

export default Experience;
