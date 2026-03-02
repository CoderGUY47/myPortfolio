import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Counter = ({ target, label, colorClass, icon }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let startTime;
    const duration = 2500;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(
        Math.floor((progress / duration) * target),
        target,
      );
      setCount(increment);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={nodeRef}
      className="flex flex-col items-center group relative p-6"
    >
      <div
        className={`text-5xl font-black mb-2 bg-linear-to-r ${colorClass} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}
      >
        {count}+
      </div>
      <div className="flex items-center gap-2">
        <i className={`${icon} text-primary-400 text-xs opacity-60`}></i>
        <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          {label}
        </span>
      </div>
    </div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springScroll = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 150,
  });
  const yOffset = useTransform(springScroll, [0, 1], [100, -100]);
  const imageRotate = useTransform(springScroll, [0, 1], [-5, 5]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-dark-bg"
    >
      {/* 🎭 SENIOR DESIGNER: ADAPTIVE BACKGROUND DEPTH */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary-950/20 to-transparent pointer-events-none"></div>
      <motion.div
        style={{ y: yOffset }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"
      ></motion.div>

      <div className="w-[90%] lg:w-[85%] max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* 🖼️ LEFT COLUMN: IDENTITY & VISUAL CENTER */}
          <div className="lg:col-span-5 relative group">
            <motion.div
              style={{ rotate: imageRotate }}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[4rem] group"
            >
              {/* Main Image */}
              <img
                src="/biopic.png"
                alt="S.M.Hasan - Professional Persona"
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
              />

              {/* Senior Touch: Glass Overlay Frame */}
              <div className="absolute inset-0 border-[16px] border-white/5 rounded-[4rem] pointer-events-none"></div>
              <div className="absolute inset-0 bg-linear-to-t from-dark-bg/80 via-transparent to-transparent opacity-60"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 right-10 glass p-6 rounded-3xl border border-white/10 backdrop-blur-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-primary-400 font-black text-[10px] uppercase tracking-widest block mb-1">
                  Current Focus
                </span>
                <span className="text-white font-bold text-lg">
                  CS Undergrad & UI Architect
                </span>
              </div>
            </motion.div>

            {/* Background Decorative Rings */}
            <div className="absolute -inset-10 border border-white/5 rounded-full -z-10 animate-[spin_20s_linear_infinite] opacity-30"></div>
            <div className="absolute -inset-20 border border-primary-500/10 rounded-full -z-10 animate-[spin_30s_linear_infinite_reverse] opacity-20"></div>
          </div>

          {/* ✍️ RIGHT COLUMN: NARRATIVE & STATS */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-4 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
                  Origin: Dhaka, BD
                </span>
              </motion.div>

              <h2 className="text-4xl font-black uppercase leading-tight tracking-tighter">
                Crafting <br />
                <span className="text-gradient">Digital Soul</span>
              </h2>

              <p className="text-lg font-medium text-slate-200 leading-tight italic max-w-2xl border-l-[6px] border-primary-600 pl-8">
                "Design is not just what it looks like and feels like. Design is
                how it works."
              </p>
            </div>

            <div className="space-y-8 max-w-2xl">
              <p className="text-slate-400 text-base leading-relaxed font-medium">
                I am <span className="text-white font-black">S.M.Hasan</span>, a
                CSE student at **Daffodil International University**. My work
                lives at the intersection of logical purity and aesthetic
                emotion.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                I don't just build websites; I architect immersive digital
                environments. By combining the rigor of software engineering
                with the intuition of modern design, I create web applications
                that resonate with users on a visceral level.
              </p>
            </div>

            {/* 📊 SENIOR STATS: HORIZONTAL GRID CENTERED */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 justify-items-center">
              <Counter
                target={5}
                label="Years Vision"
                icon="fa-solid fa-compass"
                colorClass="from-blue-400 to-indigo-500"
              />
              <Counter
                target={120}
                label="Deployments"
                icon="fa-solid fa-bolt"
                colorClass="from-purple-400 to-primary-500"
              />
              <Counter
                target={60}
                label="Collabs"
                icon="fa-solid fa-handshake"
                colorClass="from-indigo-400 to-blue-500"
              />
              <Counter
                target={15}
                label="Mentions"
                icon="fa-solid fa-bookmark"
                colorClass="from-primary-400 to-purple-500"
              />
            </div>

            {/* Action Group CENTERED */}
            <div className="pt-8 flex flex-wrap gap-8 justify-center md:justify-start">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">
                  Direct Line
                </span>
                <span
                  className="text-xl font-bold text-white hover:text-primary-400 transition-colors cursor-pointer"
                  onClick={() =>
                    (window.location.href = "mailto:s.m.hasan4599@gmail.com")
                  }
                >
                  s.m.hasan4599@gmail.com
                </span>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">
                  Base
                </span>
                <span className="text-xl font-bold text-white italic">
                  Dhaka // Remote
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
