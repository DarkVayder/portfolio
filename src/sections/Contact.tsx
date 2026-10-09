import { useState } from "react";
import Icon from "../components/Icon";
import LiveClock from "../components/LiveClock";
import { PROFILE } from "../data/profile";

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
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-20 sm:py-24">
      <div data-reveal>
        <p className="eyebrow">Contact</p>
        <h2
          id="contact-title"
          className="mt-3 max-w-2xl text-balance font-display text-3xl font-medium text-paper sm:text-5xl"
        >
          Hiring for a team that ships? Let's talk.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-muted">
          {PROFILE.availability}. Email is the fastest way to reach me.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href={`mailto:${PROFILE.email}`} className="btn-primary">
            <Icon name="mail" />
            {PROFILE.email}
          </a>
          <button type="button" onClick={handleCopy} className="btn-secondary">
            <Icon name={copied ? "check" : "copy"} />
            <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
          </button>
          <a href={PROFILE.cv.path} download={PROFILE.cv.filename} className="btn-secondary">
            <Icon name="download" />
            Download CV
          </a>
        </div>

        <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted">
          <span>
            {PROFILE.location} ({PROFILE.utcOffset})
          </span>
          <LiveClock />
        </p>
      </div>
    </section>
  );
};

export default Contact;
