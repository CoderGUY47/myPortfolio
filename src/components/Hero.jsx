import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const name = "S.M.Hasan";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer = setTimeout(() => {
      const fullText = name;
      const isFinishedTyping = !isDeleting && displayText === fullText;
      const isFinishedDeleting = isDeleting && displayText === "";

      if (isFinishedTyping) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isFinishedDeleting) {
        setIsDeleting(false);
        setTypingSpeed(150);
      } else {
        const nextContent = isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1);

        setDisplayText(nextContent);
        setTypingSpeed(isDeleting ? 75 : 150);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full -top-20 -left-20 pointer-events-none"
      ></motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full -bottom-20 -right-20 pointer-events-none"
      ></motion.div>

      <div className="w-[90%] md:w-[70%] mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-400 font-black tracking-widest uppercase text-sm mb-4 block bg-primary-950/30 w-fit px-4 py-1 rounded-full border border-primary-500/20">
            Creative Web Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tighter">
            Hi, I'm <br />
            <span className="text-gradient">
              {displayText}
              <span className="animate-pulse border-r-4 border-primary-400 ml-1"></span>
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed font-medium">
            Specializing in modern frontend technologies to create stunning,
            high-performance web applications that WOW users and drive results.
          </p>
          <div className="flex space-x-4">
            <a
              href="#portfolio"
              className="px-10 py-5 header-gradient rounded-2xl font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-2xl shadow-purple-900/40"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-10 py-5 glass rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all border border-white/20 shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* 🛸 INTERACTIVE BIOPIC (REIMAGINED) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center"
        >
          {/* Main Identity Container */}
          <div className="relative w-full max-w-[450px] aspect-[4/5] group">
            {/* 🎭 VIGNETTE IDENTITY (True Zero-Box Float) */}
            <div className="absolute inset-0 z-10">
              <img
                src="/biopic.png"
                alt="S.M.Hasan"
                className="w-full h-full object-contain transition-all duration-1000 scale-105 group-hover:scale-110"
                style={{
                  maskImage:
                    "radial-gradient(circle at 45% 40%, black 20%, transparent 85%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 45% 40%, black 20%, transparent 85%)",
                }}
              />
            </div>

            {/* 🛰️ ORBITAL HUD ELEMENTS (INTERACTIVE) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 border border-primary-500/10 rounded-full z-0 pointer-events-none"
            ></motion.div>

            <div className="absolute top-10 -right-12 z-30">
              <div className="glass px-4 py-2 rounded-xl border border-white/10 backdrop-blur-3xl animate-float [animation-delay:-2s]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">
                    UI.Deploy: Active
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -left-12 z-30">
              <div className="glass px-4 py-2 rounded-xl border border-white/10 backdrop-blur-3xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-px bg-primary-400"></div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary-400">
                    Architecture: v4.7
                  </span>
                </div>
              </div>
            </div>

            {/* 🧬 DATA STREAM OVERLAY (SUBTLE INTERACTIVE CLICK) */}
            <div className="absolute inset-0 z-40 group-hover:bg-primary-500/5 transition-all duration-700 pointer-events-none rounded-[5rem]"></div>
          </div>

          {/* Decorative Glows */}
          <div className="absolute -z-10 w-[140%] h-[140%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute -z-10 w-[100%] h-[100%] bg-primary-600/10 blur-[80px] rounded-full animate-pulse transition-all pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
