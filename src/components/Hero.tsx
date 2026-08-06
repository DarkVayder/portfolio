import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";
import { fadeUp } from "../lib/motion";

const handleViewCV = () =>
  window.open(`https://drive.google.com/file/d/${PROFILE.cv.driveFileId}/view`, "_blank");

const handleDownloadCV = () => {
  window.location.href = `https://drive.google.com/uc?export=download&id=${PROFILE.cv.driveFileId}`;
};

const Hero = () => {
  return (
    <section id="top" className="border-b border-line pb-20 pt-40 lg:pt-48">
      <motion.p
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="font-mono text-sm text-signal"
      >
        {PROFILE.role} — {PROFILE.roleDetail} — {PROFILE.location}
      </motion.p>

      <motion.h1
        custom={0.1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
      >
        {PROFILE.name}
      </motion.h1>

      <motion.p
        custom={0.25}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
      >
        {PROFILE.tagline}
      </motion.p>

      <motion.div
        custom={0.4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#work"
          className="rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
        >
          View work
        </a>
        <button
          onClick={handleViewCV}
          className="rounded-full border border-line px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-muted"
        >
          View CV
        </button>
        <button
          onClick={handleDownloadCV}
          className="font-mono text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-paper"
        >
          Download CV
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
