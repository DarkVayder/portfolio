import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import aboutImage from "../assets/about.jpg";
import { PROFILE } from "../data/profile";
import { fadeUp } from "../lib/motion";
import SectionHeading from "./SectionHeading";

const HANDLES = [
  { label: "@DarkVayder", href: PROFILE.social.github, icon: FaGithub },
  { label: "Rabiu Muhammad", href: PROFILE.social.linkedin, icon: FaLinkedin },
  { label: "@Zeldrys_kun", href: PROFILE.social.x, icon: FaXTwitter },
];

const About = () => {
  return (
    <section id="about" className="border-b border-line py-24">
      <SectionHeading index="04" eyebrow="About" title="What I actually do" />

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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0.15}
          className="lg:col-span-3"
        >
          <p className="text-lg leading-relaxed text-muted">{PROFILE.bio}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {HANDLES.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-signal hover:text-paper"
              >
                <Icon className="text-sm" />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
