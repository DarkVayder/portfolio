import React, { Suspense, lazy } from "react";

// Lazy Load Components
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Techs = lazy(() => import("./components/Techs"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 relative">
      {/* Background Gradient (Optimized) */}
      <div
        aria-hidden="true"
        className="fixed top-0 min-h-screen w-screen bg-neutral-950 before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-[-2]"
      ></div>

      {/* Main Content */}
      <div className="container mx-auto px-8 lg:px-16">
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Navbar />
          <Hero />
          <About />
          <Techs />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
