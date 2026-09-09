import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
};

const SectionHeading = ({ index, eyebrow, title }: Props) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={fadeUp}
    className="mb-14 flex items-baseline gap-3"
  >
    <span className="font-mono text-sm text-muted/60">{index}</span>
    <div>
      <span className="font-mono text-sm text-signal tracking-wide">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-paper">{title}</h2>
    </div>
  </motion.div>
);

export default SectionHeading;
