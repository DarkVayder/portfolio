import Icon from "../components/Icon";
import Section from "../components/Section";
import { PROJECTS } from "../data/projects";

const Work = () => (
  <Section
    id="work"
    eyebrow="Selected work"
    title="Products people actually use"
    intro="Five live platforms. For each one: the problem it solves, and the part of it I built."
  >
    <div className="flex flex-col">
      {PROJECTS.map((project, index) => (
        <article
          key={project.slug}
          id={project.slug}
          aria-labelledby={`${project.slug}-title`}
          data-reveal
          className="grid gap-8 border-t border-line py-12 first:border-t-0 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-12"
        >
          <header className="lg:col-span-4">
            <p className="font-mono text-xs text-muted">
              {String(index + 1).padStart(2, "0")} · {project.category}
            </p>
            <h3 id={`${project.slug}-title`} className="mt-3 font-display text-3xl font-medium text-paper">
              {project.title}
            </h3>
            <p className="mt-2 text-muted">{project.summary}</p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-signal">{project.role}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line px-4 font-mono text-sm text-paper transition-colors hover:border-signal hover:text-signal"
                  >
                    {link.label}
                    <Icon name="arrow-up-right" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <div className="lg:col-span-8">
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">The problem</h4>
            <p className="mt-3 max-w-2xl leading-relaxed text-paper">{project.problem}</p>

            <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-muted">What I built</h4>
            <ul className="mt-3 flex max-w-2xl flex-col gap-3">
              {project.contribution.map((item) => (
                <li key={item} className="relative pl-5 leading-relaxed text-muted">
                  <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2.5 bg-signal" />
                  {item}
                </li>
              ))}
            </ul>

            {project.outcomes && project.outcomes.length > 0 && (
              <>
                <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-muted">Outcome</h4>
                <ul className="mt-3 flex max-w-2xl flex-col gap-3">
                  {project.outcomes.map((item) => (
                    <li key={item} className="leading-relaxed text-paper">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <ul aria-label={`${project.title} tech stack`} className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default Work;
