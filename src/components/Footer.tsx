import { PROFILE } from "../data/profile";

// Fixed at build time so the prerendered HTML and the client agree.
const YEAR = new Date().getFullYear();

const Footer = () => (
  <footer className="footer relative mt-10 overflow-hidden border-t border-line font-mono text-xs text-muted">
    <div aria-hidden="true" className="footer-giant">
      {PROFILE.name}
    </div>

    <div className="relative mx-auto max-w-content px-6 pb-10 pt-4 lg:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {YEAR} {PROFILE.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
          <li>
            <a href="#top" className="back-top">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-6 max-w-2xl leading-relaxed">
        Product names and trademarks shown here belong to their respective owners and appear only to describe work I
        contributed to. This site sets no cookies and runs no analytics.
      </p>
    </div>
  </footer>
);

export default Footer;
