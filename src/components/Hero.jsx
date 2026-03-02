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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            y: y2,
            rotate: rotate,
            opacity: imageOpacity,
            scale: useTransform(scrollYProgress, [0, 0.4], [1, 0.8]),
          }}
        >
          <div className="relative z-10 glass p-4 rounded-[2.5rem] overflow-hidden shadow-2xl animate-float border border-white/10">
            <div className="relative overflow-hidden rounded-3xl group">
              <img
                src="/biopic.png"
                alt="S.M.Hasan Biopic"
                className="w-full h-auto object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="absolute bottom-10 left-10">
              <p className="text-white font-black text-2xl uppercase tracking-tighter">
                Innovate.
              </p>
              <p className="text-primary-400 font-bold tracking-widest text-xs uppercase opacity-80 mt-1">
                Design. Develop.
              </p>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-linear-to-br from-primary-400 to-purple-500 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
