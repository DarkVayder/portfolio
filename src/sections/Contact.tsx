import { useState } from "react";
import FloatShape from "../components/FloatShape";
import Icon from "../components/Icon";
import LiveClock from "../components/LiveClock";
import { PROFILE } from "../data/profile";
import { useMagnetic } from "../lib/tilt";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const mailRef = useMagnetic<HTMLAnchorElement>(0.3);
  const copyRef = useMagnetic<HTMLButtonElement>(0.3);
  const cvRef = useMagnetic<HTMLAnchorElement>(0.3);

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
    <section id="contact" aria-labelledby="contact-title" className="section relative py-20 sm:py-28">
      <div aria-hidden="true" className="section-rule" />
      <span aria-hidden="true" className="section-num">
        05
      </span>
      <FloatShape kind="ring" size={130} depth={0.09} duration={24} className="left-[-1%] top-10 hidden xl:block" />
      <FloatShape kind="cube" size={74} depth={0.14} duration={16} className="right-[6%] bottom-16 hidden lg:block" />

      <div data-reveal="scale" className="glow-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true" className="eyebrow-dash" />
              Contact
            </p>
            <h2
              id="contact-title"
              className="gradient-text mt-4 max-w-2xl text-balance font-display text-4xl font-medium sm:text-6xl"
            >
              Hiring for a team that ships? Let's talk.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">
              {PROFILE.availability}. Email is the fastest way to reach me.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a ref={mailRef} href={`mailto:${PROFILE.email}`} className="btn-primary magnetic">
                <Icon name="mail" />
                {PROFILE.email}
              </a>
              <button ref={copyRef} type="button" onClick={handleCopy} className="btn-secondary magnetic">
                <Icon name={copied ? "check" : "copy"} />
                <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
              </button>
              <a ref={cvRef} href={PROFILE.cv.path} download={PROFILE.cv.filename} className="btn-secondary magnetic">
                <Icon name="download" />
                Download CV
              </a>
            </div>

            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted">
              <span>
                {PROFILE.location} ({PROFILE.utcOffset})
              </span>
              <LiveClock />
            </p>
          </div>

          <a href={`mailto:${PROFILE.email}`} aria-label={`Email ${PROFILE.name}`} className="orbit-badge mx-auto">
            <svg viewBox="0 0 200 200" aria-hidden="true" className="orbit-text">
              <defs>
                <path id="orbit-path" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text>
                <textPath href="#orbit-path" startOffset="0" textLength="486" lengthAdjust="spacing">
                  OPEN TO WORK · LET'S BUILD · OPEN TO WORK · LET'S BUILD ·
                </textPath>
              </text>
            </svg>
            <span className="orbit-core">
              <Icon name="arrow-up-right" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
