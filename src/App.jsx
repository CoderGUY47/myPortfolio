// Deployment Sync: 2026-03-15
import React from "react";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Capabilities from "./components/Capabilities";
import ProjectShowcase from "./components/ProjectShowcase";
import Protocol from "./components/Protocol";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-accent selection:text-background font-sans overflow-x-hidden">
      {/* Global Background UI Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Parallax speed={0.15} className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-[300px] bg-accent/2 blur-[80px] rounded-full"></div>
        </Parallax>
        <Parallax speed={-0.15} className="absolute inset-0">
          <div className="absolute top-[40%] right-0 w-full h-[300px] bg-accent-secondary/2 blur-[80px] rounded-full"></div>
        </Parallax>
      </div>

      {/* Main Content Feed - Restricted for visual comfort [65% Width] */}
      <div className="relative z-10 w-full md:w-[65%] mx-auto bg-background min-h-screen shadow-[0_0_100px_rgba(0,255,136,0.03)]">
        {/* Inner Framework Borders */}
        <div className="absolute top-0 left-0 h-full w-px bg-white/5 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-px bg-white/5 pointer-events-none"></div>

        <Navbar />

        <main className="space-y-10 md:space-y-10 overflow-x-hidden pt-12">
          <Hero />
          <AboutMe />
          <TechStack />
          <div className="space-y-10 md:space-y-10 px-4 sm:px-6 lg:px-10 pb-14">
            <div className="space-y-12">
              <ProjectShowcase />
            </div>
            <Protocol />
            <Experience />
            <Capabilities />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>

      {/* Decorative Outer Framing (Fixed UI) */}
      <div className="fixed top-0 left-0 w-16 h-16 border-t border-l border-accent/40 pointer-events-none z-50 m-4"></div>
      <div className="fixed bottom-0 right-0 w-16 h-16 border-b border-r border-accent/40 pointer-events-none z-50 m-4"></div>

      {/* Global Metadata Reader (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-100 hidden xl:block pointer-events-none opacity-20">
        <div className="flex flex-col gap-1 font-mono text-[14px] text-white leading-none">
          <span>LAT_COORD: 23.8103° N</span>
          <span>LNG_COORD: 90.4125° E</span>
          <span className="text-accent animate-pulse">UPLINK_STABLE</span>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
