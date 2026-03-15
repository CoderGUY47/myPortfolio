import React from "react";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background relative selection:bg-accent selection:text-background font-sans overflow-x-hidden">
        {/*pretty light clouds floating behind everything*/}
        <div className="fixed inset-0 pointer-events-none z-0">
          <Parallax speed={0.15} className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-[300px] bg-accent/2 blur-[80px] rounded-full"></div>
          </Parallax>
          <Parallax speed={-0.15} className="absolute inset-0">
            <div className="absolute top-[40%] right-0 w-full h-[300px] bg-accent-secondary/2 blur-[80px] rounded-full"></div>
          </Parallax>
        </div>

        {/*the main box where all my work lives*/}
        <div className="relative z-10 w-full md:w-[65%] mx-auto bg-background min-h-screen shadow-[0_0_100px_rgba(0,255,136,0.03)]">
          {/*thin lines to make the box look nice*/}
          <div className="absolute top-0 left-0 h-full w-px bg-white/5 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-px bg-white/5 pointer-events-none"></div>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>

          <Footer />
        </div>

        {/*little corners on the edge of the screen*/}
        <div className="fixed top-0 left-0 w-16 h-16 border-t border-l border-accent/40 pointer-events-none z-50 m-4"></div>
        <div className="fixed bottom-0 right-0 w-16 h-16 border-b border-r border-accent/40 pointer-events-none z-50 m-4"></div>

        {/*secret numbers that show where i am*/}
        <div className="fixed bottom-6 left-6 z-100 hidden xl:block pointer-events-none opacity-20">
          <div className="flex flex-col gap-1 font-mono text-[14px] text-white leading-none">
            <span>LAT_COORD: 23.8103° N</span>
            <span>LNG_COORD: 90.4125° E</span>
            <span className="text-accent animate-pulse">UPLINK_STABLE</span>
          </div>
        </div>

        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
