import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      //i show the button only when the page is long enough to make me tired
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
    const duration = 1200;    //i want to go up slowly like a balloon floating in the air

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      //this math makes the movement feel like a gentle swing for my soul
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
      className={`fixed bottom-10 right-10 z-[100] transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-50 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative w-14 h-14 md:w-16 md:h-16 bg-black border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-black hover:shadow-neon group cyber-chamfer shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-300 active:scale-90"
        aria-label="Scroll to Top"
      >
        {/*these little corners make the button look like a tiny robot*/}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent group-hover:border-black transition-colors"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent group-hover:border-black transition-colors"></div>
        
        {/*the arrow points to the sky and makes me feel hopeful*/}
        <FaArrowUp className="text-xl group-hover:-translate-y-2 transition-transform duration-300" />
        
        {/*just a little secret word for my own eyes to see*/}
        <span className="absolute -top-4 right-0 text-[8px] font-mono text-accent opacity-60 pointer-events-none hidden md:block">
          NAV_ASCEND
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;
