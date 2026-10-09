import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useRevealOnScroll } from "./lib/reveal";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import { resolveRoute, type RouteId } from "./routes";

const PAGES: Record<RouteId, () => JSX.Element> = {
  home: Home,
  privacy: Privacy,
  "not-found": NotFound,
};

function App({ pathname }: { pathname: string }) {
  const route = resolveRoute(pathname);
  const Page = PAGES[route.id];

  useRevealOnScroll();

  useEffect(() => {
    document.title = route.title;
  }, [route.title]);

  return (
    <div className="relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-signal focus:px-5 focus:py-3 focus:font-mono focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <div aria-hidden="true" className="ambient-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-screen" />
      <Navbar />
      <main id="main" className="mx-auto max-w-content px-6 lg:px-10">
        <Page />
      </main>
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
