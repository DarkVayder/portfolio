import { motion } from "framer-motion";
import profileImage from "../assets/ProfileImage.jpg";
import { PROFILE } from "../data/profile";
import { fadeUp } from "../lib/motion";
import LiveClock from "./LiveClock";

const handleViewCV = () => window.open(PROFILE.cv.path, "_blank", "noopener,noreferrer");

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = PROFILE.cv.path;
  link.download = PROFILE.cv.filename;
  link.click();
};

const Hero = () => {
  return (
    <section id="top" className="pb-16 pt-32 lg:pt-40">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-wrap items-center gap-4"
      >
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-line">
          <img src={profileImage} alt={PROFILE.name} className="h-full w-full object-cover" />
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to new work
        </span>
        <span className="hidden font-mono text-xs text-muted sm:inline">·</span>
        <span className="hidden sm:inline">
          <LiveClock />
        </span>
      </motion.div>

      <motion.p
        custom={0.15}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-8 font-mono text-sm text-signal"
      >
        {PROFILE.role} — {PROFILE.roleDetail}  {/* — {PROFILE.location} */}
      </motion.p>

      <motion.h1
        custom={0.25}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-4 max-w-3xl font-display text-5xl font-medium leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
      >
        {PROFILE.name}
      </motion.h1>

      <motion.p
        custom={0.4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
      >
        {PROFILE.tagline}
      </motion.p>

      <motion.div
        custom={0.55}
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
