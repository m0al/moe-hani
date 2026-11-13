import { useCallback, useState } from "react";
import { SmoothScrollProvider } from "./lib/SmoothScrollProvider";
import { Preloader } from "./components/ui/Preloader";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";

function App() {
  const [preloading, setPreloading] = useState(true);
  const handlePreloaderDone = useCallback(() => setPreloading(false), []);

  return (
    <SmoothScrollProvider>
      <Preloader onDone={handlePreloaderDone} />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" aria-hidden={preloading}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

export default App;
