import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import FloatingAvatar from "./components/FloatingAvatar";
import ParallaxDecorations from "./components/ParallaxDecorations";
import ScrollControls from "./components/ScrollControls";

function App() {
  return (
    <div className="bg-gradient-premium min-h-screen">
      <FloatingAvatar />
      <ScrollControls />
      {/* Background blobs for depth */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[50vh] h-[50vh] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[50vh] h-[50vh] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      <main className="relative">
        <ParallaxDecorations />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
