import { motion } from "framer-motion";
import { TECH_GROUPS } from "../data/techstack";
import { fadeUp } from "../lib/motion";
import SectionHeading from "./SectionHeading";

const TechStack = () => {
  return (
    <section className="border-b border-line py-24">
      <SectionHeading eyebrow="Stack" title="Tools I reach for" />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {TECH_GROUPS.map((group, index) => (
          <motion.div
            key={group.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={index * 0.08}
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-signal">{group.label}</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
