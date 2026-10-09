import Icon from "./Icon";

// The current theme lives on <html data-theme>, set before first paint by the inline
// script in index.html. Both icons render and CSS shows the right one, so the
// prerendered markup never disagrees with the client.
const toggleTheme = () => {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Storage can be blocked; the toggle still works for this visit.
  }
};

const ThemeToggle = () => (
  <button
    type="button"
    onClick={toggleTheme}
    aria-label="Switch between light and dark theme"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-muted hover:text-paper"
  >
    <Icon name="sun" className="theme-icon-sun" />
    <Icon name="moon" className="theme-icon-moon" />
  </button>
);

export default ThemeToggle;
