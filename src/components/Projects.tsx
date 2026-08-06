import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { fadeUp } from "../lib/motion";
import ProjectCover from "./ProjectCover";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <section id="work" className="border-b border-line py-24">
      <SectionHeading eyebrow="Selected work" title="Products people actually use" />

      <div className="flex flex-col gap-6">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={index * 0.05}
            className="group grid grid-cols-1 gap-8 rounded-2xl border border-line bg-surface/40 p-6 transition-colors hover:border-muted/60 lg:grid-cols-5 lg:p-8"
          >
            <div className="overflow-hidden rounded-xl border border-line lg:col-span-2">
              <ProjectCover title={project.title} accent={project.accent} />
            </div>

            <div className="flex flex-col justify-center lg:col-span-3">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
                <span style={{ color: project.accent }}>{project.category}</span>
                <span>·</span>
                <span>{project.role}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-medium text-paper sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 text-muted">{project.summary}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-5">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-paper underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
