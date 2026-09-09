import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { PROFILE } from "../data/profile";
import { fadeUp } from "../lib/motion";
import LiveClock from "./LiveClock";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm text-signal">Contact</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new work
          </span>
        </div>

        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium text-paper sm:text-5xl">
          Have a project in mind? Let's build it.
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            {PROFILE.email}
          </a>
          <button
            onClick={handleCopy}
            aria-label="Copy email address"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-3 font-mono text-sm text-muted transition-colors hover:border-muted hover:text-paper"
          >
            {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
            {copied ? "Copied" : "Copy"}
          </button>
          <a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-paper"
          >
            WhatsApp
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-sm text-muted">
          <span>{PROFILE.location}</span>
          <span>·</span>
          <LiveClock />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
