import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";
import { fadeUp } from "../lib/motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
      >
        <span className="font-mono text-sm text-signal">Contact</span>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-paper sm:text-5xl">
          Have a project in mind? Let's build it.
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-paper"
          >
            WhatsApp
          </a>
          <span className="font-mono text-sm text-muted">{PROFILE.location}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
