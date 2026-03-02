import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const skills = [
    { name: "React.js", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "Tailwind CSS", percentage: 95 },
    { name: "Sass", percentage: 80 },
    { name: "HTML5", percentage: 98 },
    { name: "CSS3", percentage: 95 },
    { name: "Git", percentage: 85 },
    { name: "Figma", percentage: 75 },
    { name: "Node.js", percentage: 70 },
    { name: "SQL", percentage: 65 },
  ];

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Parallax Background Glow */}
      <motion.div
        style={{ y: y1 }}
        className="absolute w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      ></motion.div>

      <div className="w-[90%] md:w-[70%] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-tighter">
            Core <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Leveraging the latest technologies to build high-performance,
            scalable, and maintainable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {skills.map((skill, index) => {
            const skillY = useTransform(
              scrollYProgress,
              [0, 1],
              [index % 2 === 0 ? 30 : -30, index % 2 === 0 ? -30 : 30],
            );

            return (
              <motion.div
                key={index}
                style={{ y: skillY }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="space-y-4 group"
              >
                <div className="flex justify-between items-center px-1">
                  <span className="font-bold text-slate-300 group-hover:text-primary-400 transition-colors uppercase tracking-widest text-sm">
                    {skill.name}
                  </span>
                  <span className="text-sm font-black text-primary-400 bg-primary-950/30 px-3 py-1 rounded-lg border border-primary-500/20 shadow-lg shadow-purple-900/20">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[3px] shadow-inner shadow-black/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full rounded-full header-gradient shadow-[0_0_20px_rgba(124,58,237,0.4)] relative"
                  >
                    <div className="absolute top-0 right-0 w-2 h-full bg-white/20 blur-[2px]"></div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
