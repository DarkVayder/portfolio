import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";
import { PROFILE } from "../data/profile";
import { fadeUp } from "../lib/motion";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="border-b border-line py-24">
      <SectionHeading eyebrow="About" title="What I actually do" />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="lg:col-span-2"
        >
          <img
            src={aboutImage}
            alt={PROFILE.name}
            className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
          />
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0.15}
          className="text-lg leading-relaxed text-muted lg:col-span-3"
        >
          {PROFILE.bio}
        </motion.p>
      </div>
    </section>
  );
};

export default About;
