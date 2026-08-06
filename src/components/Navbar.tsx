import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { PROFILE } from "../data/profile";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-ink/85 backdrop-blur-md border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="font-display text-lg font-medium text-paper" onClick={() => setMenuOpen(false)}>
          Rabiu<span className="text-signal">.</span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-sm text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-paper">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 text-lg text-muted">
          <a
            href={PROFILE.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden transition-colors hover:text-paper sm:inline-block"
          >
            <FaLinkedin />
          </a>
          <a
            href={PROFILE.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden transition-colors hover:text-paper sm:inline-block"
          >
            <FaGithub />
          </a>
          <a
            href={PROFILE.social.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hidden transition-colors hover:text-paper sm:inline-block"
          >
            <FaXTwitter />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-2xl text-paper md:hidden"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-line px-6 pb-6 font-mono text-base md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-muted transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-6 pt-3 text-xl text-muted">
            <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={PROFILE.social.x} target="_blank" rel="noopener noreferrer" aria-label="X">
              <FaXTwitter />
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
