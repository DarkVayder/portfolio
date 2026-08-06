import { PROFILE } from "../data/profile";

const Footer = () => (
  <footer className="flex flex-col items-center justify-between gap-4 py-10 font-mono text-xs text-muted sm:flex-row">
    <span>© {new Date().getFullYear()} {PROFILE.name}</span>
    <span>Built with React, TypeScript &amp; Tailwind CSS</span>
  </footer>
);

export default Footer;
