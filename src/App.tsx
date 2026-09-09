import { motion, useScroll, useSpring } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechMarquee from "./components/TechMarquee";
import TechStack from "./components/TechStack";

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 250, damping: 40, restDelta: 0.001 });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-paper antialiased">
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 z-[60] h-0.5 w-full origin-left bg-signal"
      />
      <div aria-hidden="true" className="ambient-glow pointer-events-none fixed inset-x-0 top-0 -z-10 h-screen" />
      <div aria-hidden="true" className="grain-overlay pointer-events-none fixed inset-0 -z-10" />
      <Navbar />
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Hero />
      </div>
      <TechMarquee />
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Projects />
        <Experience />
        <TechStack />
        <About />
        <Contact />
      </div>
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
