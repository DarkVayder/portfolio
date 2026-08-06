import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-paper antialiased">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-screen bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,106,61,0.12),rgba(10,10,11,0))]"
      />
      <Navbar />
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Hero />
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
