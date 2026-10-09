import { PROFILE } from "../data/profile";

// Fixed at build time so the prerendered HTML and the client agree.
const YEAR = new Date().getFullYear();

const Footer = () => (
  <footer className="border-t border-line py-10 font-mono text-xs text-muted">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {YEAR} {PROFILE.name}. All rights reserved.
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        <li>
          <a href="/privacy" className="text-link">
            Privacy &amp; legal
          </a>
        </li>
        <li>
          <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" className="text-link">
            GitHub
          </a>
        </li>
        <li>
          <a href={`mailto:${PROFILE.email}`} className="text-link">
            Email
          </a>
        </li>
      </ul>
    </div>
    <p className="mt-6 max-w-2xl leading-relaxed">
      Product names and trademarks shown here belong to their respective owners and appear only to describe work I
      contributed to. This site sets no cookies and runs no analytics.
    </p>
  </footer>
);

export default Footer;
