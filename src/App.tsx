import { useEffect } from "react";
import Backdrop from "./components/Backdrop";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import { useRevealOnScroll } from "./lib/reveal";
import { useScrollVars } from "./lib/scroll";
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
  useScrollVars();

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
      <Backdrop />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="mx-auto max-w-content px-6 lg:px-10">
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
