import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const startPosition = window.scrollY;
    const startTime = performance.now();
    const duration = 1200; // 1.2 seconds for a smooth, slow scroll

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Ease-in-out cubic easing function for an ultra-smooth start and end
      const easeInOutCubic = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition * (1 - easeInOutCubic));

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 transition-all duration-100 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative w-12 h-12 bg-black/80 backdrop-blur-xl border border-accent/30 text-accent flex items-center justify-center hover:bg-accent hover:text-black hover:shadow-neon hover:border-accent group cyber-chamfer-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-100"
        aria-label="Scroll to Top"
      >
        {/* Kinetic Targeting Accents */}
        <span className="w-1.5 h-1.5 bg-accent absolute top-1 left-1 group-hover:bg-black transition-colors duration-100"></span>
        <span className="w-1.5 h-1.5 bg-accent absolute bottom-1 right-1 group-hover:bg-black transition-colors duration-100"></span>
        
        {/* Animated Arrow */}
        <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform duration-100" />
      </button>
    </div>
  );
};

export default ScrollToTop;
