import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const lineScale = useSpring(useTransform(scrollYProgress, [0, 0.9], [0, 1]), {
    damping: 20,
    stiffness: 100,
  });

  const experiences = [
    {
      year: "2023 - Present",
      title: "UI/UX & Frontend Developer",
      company: "Freelance Specialist",
      location: "Remote / Global",
      description:
        "Architecting premium digital interfaces using the React ecosystem. Specializing in high-performance animations, accessible design systems, and immersive user journeys.",
      icon: "fa-solid fa-laptop-code",
      color: "from-blue-600 to-indigo-600",
    },
    {
      year: "2021 - 2023",
      title: "Open Source Contributor",
      company: "GitHub Ecosystem",
      location: "Worldwide Community",
      description:
        "Engineering scalable UI components and refining modern CSS architectures. Dedicated to standardizing code quality and performance metrics for the community.",
      icon: "fa-brands fa-github",
      color: "from-indigo-600 to-primary-600",
    },
    {
      year: "Future Vision",
      title: "Full Stack Aspiring Engineer",
      company: "Innovation Lab",
      location: "Tech Frontiers",
      description:
        "Merging heavy-duty backend logic with pixel-perfect frontend aesthetics to create unified, end-to-end digital solutions that define the next generation.",
      icon: "fa-solid fa-terminal",
      color: "from-primary-600 to-purple-700",
    },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-dark-bg/80"
    >
      {/* Background Depth */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"
      ></motion.div>

      <div className="w-[90%] md:w-[80%] mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-primary-400 font-black tracking-[0.4em] text-[10px] uppercase bg-primary-950/30 px-6 py-2 rounded-full border border-primary-500/20">
            Professional Path
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-8 uppercase tracking-tighter">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* ⚡ THE CENTER TIMELINE RAIL */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block"></div>

          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary-400 via-indigo-600 to-transparent -translate-x-px hidden md:block origin-top z-10 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          ></motion.div>

          <div className="space-y-32 md:space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-dark-bg border-4 border-primary-400 -translate-x-1/2 shadow-[0_0_20px_rgba(139,92,246,0.6)] z-20 group">
                    <div className="absolute inset-[-8px] rounded-full border border-primary-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Content Module */}
                  <div className="w-full md:w-[45%]">
                    <div
                      className={`glass p-10 rounded-4xl border border-white/5 hover:border-primary-500/30 transition-all duration-500 group relative overflow-hidden shadow-2xl ${isEven ? "md:text-right" : "md:text-left"} text-left`}
                    >
                      {/* Hover Gradient Bloop */}
                      <div
                        className={`absolute -inset-1 bg-linear-to-br ${exp.color} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-700`}
                      ></div>

                      <div
                        className={`flex items-center gap-6 mb-8 ${isEven ? "md:flex-row-reverse" : ""}`}
                      >
                        <div
                          className={`shrink-0 w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center text-2xl md:text-3xl bg-linear-to-br ${exp.color} text-white shadow-2xl transform transition-transform duration-500 group-hover:rotate-12`}
                        >
                          <i className={exp.icon}></i>
                        </div>
                        <div className="space-y-1">
                          <span className="text-primary-400 font-black text-[10px] md:text-xs uppercase tracking-widest">
                            {exp.year}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-black text-white">
                            {exp.title}
                          </h3>
                        </div>
                      </div>

                      <p
                        className={`text-indigo-300 font-bold mb-6 uppercase tracking-widest text-[10px] flex items-center gap-3 ${isEven ? "md:flex-row-reverse" : ""}`}
                      >
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary-500 animate-pulse"></span>
                        {exp.company} // {exp.location}
                      </p>

                      <p className="text-slate-400 leading-relaxed font-medium italic text-base md:text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-[45%]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
