import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const ScrollControls = () => {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  const { scrollYProgress } = useScroll();
  const lineScale = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    damping: 20,
    stiffness: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowUp(window.scrollY > 200);
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      setShowDown(!isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (direction) => {
    if (direction === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col items-center z-100 h-72 justify-between py-6">
      {/* 🎭 SENIOR DESIGNER: THE VERTICAL NAV BRIDGE */}

      {/* Dynamic Connector Line (The "Track") - Hidden at top */}
      <motion.div
        animate={{ opacity: showUp ? 1 : 0 }}
        className="absolute top-16 bottom-16 w-px bg-white/10 left-1/2 -translate-x-1/2"
      ></motion.div>
      <motion.div
        animate={{ opacity: showUp ? 1 : 0 }}
        style={{ scaleY: lineScale }}
        className="absolute top-16 bottom-16 w-0.5 bg-linear-to-b from-primary-400 to-indigo-500 left-1/2 -translate-x-1/2 origin-top shadow-[0_0_10px_rgba(139,92,246,0.3)]"
      ></motion.div>

      <div className="relative z-10">
        <AnimatePresence>
          {showUp && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(139, 92, 246, 0.2)",
              }}
              onClick={() => scrollTo("up")}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-primary-400 cursor-pointer shadow-2xl backdrop-blur-xl group relative"
              aria-label="Scroll to Top"
            >
              <motion.i
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="fa-solid fa-chevron-up text-lg group-hover:text-white transition-colors"
              ></motion.i>
              <span className="absolute left-16 bg-dark-bg/80 px-4 py-1 rounded-lg text-[10px] uppercase font-black tracking-widest text-white scale-0 group-hover:scale-100 transition-transform origin-left border border-white/5">
                Top
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10">
        <AnimatePresence>
          {showDown && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(139, 92, 246, 0.2)",
              }}
              onClick={() => scrollTo("down")}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-primary-400 cursor-pointer shadow-2xl backdrop-blur-xl group relative"
              aria-label="Scroll Down"
            >
              <motion.i
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="fa-solid fa-chevron-down text-lg group-hover:text-white transition-colors"
              ></motion.i>
              <span className="absolute left-16 bg-dark-bg/80 px-4 py-1 rounded-lg text-[10px] uppercase font-black tracking-widest text-white scale-0 group-hover:scale-100 transition-transform origin-left border border-white/5">
                Next
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScrollControls;
