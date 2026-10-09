import { useEffect, useState } from "react";
import { PROFILE } from "../data/profile";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Approach", id: "approach" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: PROFILE.social.linkedin, icon: "linkedin" },
  { label: "GitHub", href: PROFILE.social.github, icon: "github" },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled || menuOpen ? "border-line bg-ink/90 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-content items-center justify-between px-6 py-3 lg:px-10">
        <a href="/" className="font-display text-lg font-medium text-paper" onClick={() => setMenuOpen(false)}>
          {PROFILE.name}
          <span className="text-signal">.</span>
        </a>

        <ul className="hidden items-center gap-7 font-mono text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`/#${link.id}`}
                aria-current={activeId === link.id ? "true" : undefined}
                className={`py-2 transition-colors hover:text-paper ${
                  activeId === link.id ? "text-paper" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 text-lg text-muted">
          <div className="hidden items-center sm:flex">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (opens in a new tab)`}
                className="flex h-11 w-11 items-center justify-center transition-colors hover:text-paper"
              >
                <Icon name={link.icon} />
              </a>
            ))}
          </div>
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center text-2xl text-paper md:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      <ul
        id="mobile-menu"
        hidden={!menuOpen}
        className="flex-col gap-1 border-t border-line px-6 pb-6 font-mono text-base md:!hidden [&:not([hidden])]:flex"
      >
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`/#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-muted transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="flex items-center gap-2 pt-3 text-xl text-muted">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} (opens in a new tab)`}
              className="flex h-11 w-11 items-center justify-center"
            >
              <Icon name={link.icon} />
            </a>
          ))}
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
