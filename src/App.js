import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Techs from "./components/Techs";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900">
      {/* Background Layers */}
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="fixed top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 lg:px-16">
        <Navbar />
        <Hero />
        <About />
        <Techs />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
