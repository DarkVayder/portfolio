import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS } from "../data/projects";
import { fadeUp } from "../lib/motion";
import ProjectCover from "./ProjectCover";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <section id="work" className="border-b border-line py-24">
      <SectionHeading index="01" eyebrow="Selected work" title="Products people actually use" />

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
              <div className="transition-transform duration-500 group-hover:scale-105">
                <ProjectCover title={project.title} accent={project.accent} />
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-3">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
                <span className="text-muted/60">{String(index + 1).padStart(2, "0")}</span>
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

              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-sm text-paper transition-colors hover:border-signal hover:text-signal"
                  >
                    {link.label}
                    <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
