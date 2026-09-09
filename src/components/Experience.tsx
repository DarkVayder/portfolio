import { motion } from "framer-motion";
import { EXPERIENCES } from "../data/experience";
import { fadeUp } from "../lib/motion";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section id="experience" className="border-b border-line py-24">
      <SectionHeading index="02" eyebrow="Experience" title="Where I've shipped" />

      <div className="flex flex-col">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={`${experience.role}-${experience.year}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={index * 0.08}
            className="grid grid-cols-1 gap-3 border-t border-line py-8 first:border-t-0 lg:grid-cols-4 lg:gap-8"
          >
            <p className="font-mono text-sm text-muted">{experience.year}</p>

            <div className="lg:col-span-3">
              <h3 className="font-display text-xl font-medium text-paper">{experience.role}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{experience.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
