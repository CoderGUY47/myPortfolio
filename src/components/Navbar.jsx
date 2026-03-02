import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border-white/10 py-3 shadow-2xl"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="w-[90%] md:w-[70%] mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold text-gradient">
          DEV.PORTFOLIO
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-widest uppercase">
          <a href="#about" className="hover:text-primary-400 transition-colors">
            About
          </a>
          <a
            href="#skills"
            className="hover:text-primary-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="hover:text-primary-400 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="hover:text-primary-400 transition-colors text-gradient border-b border-purple-500/50"
          >
            Hire Me
          </a>
        </div>
        <button className="md:hidden text-2xl">
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
