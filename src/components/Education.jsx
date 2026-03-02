import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const educationItems = [
    {
      year: "2020 - Present",
      degree: "B.Sc in CSE",
      institution: "Daffodil International University",
      description:
        "Deepening my knowledge in software architecture, algorithms, and advanced web technologies. Actively participating in research and development projects.",
      icon: "fa-solid fa-graduation-cap",
      color: "from-purple-500 to-indigo-500",
    },
    {
      year: "2018 - 2020",
      degree: "Higher Secondary Certificate",
      institution: "Science Group",
      description:
        "Focused on Science with a strong passion for Mathematics and Computing, laying the foundation for my engineering journey.",
      icon: "fa-solid fa-school",
      color: "from-indigo-500 to-primary-500",
    },
    {
      year: "The Beginning",
      degree: "Born & Raised",
      institution: "Dhaka, Bangladesh",
      description:
        "My journey started in the heart of Bangladesh, where my curiosity for technology and digital art first ignited.",
      icon: "fa-solid fa-house-chimney-window",
      color: "from-primary-500 to-purple-600",
    },
  ];

  return (
    <section
      id="education"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-dark-bg/50"
    >
      <div className="w-[90%] md:w-[70%] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary-400 font-black tracking-widest text-xs uppercase bg-primary-950/30 px-4 py-2 rounded-full border border-primary-500/20">
            Academics
          </span>
          <h2 className="text-5xl font-black mt-6 uppercase tracking-tighter">
            Educational <span className="text-gradient">Timeline</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationItems.map((item, index) => {
            const itemY = useTransform(
              scrollYProgress,
              [0, 1],
              [50 + index * 20, -50 - index * 20],
            );

            return (
              <motion.div
                key={index}
                style={{ y: itemY }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex justify-center"
              >
                <div className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-primary-500/30 transition-all h-[380px] w-full max-w-[360px] flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
                  {/* Icon Block */}
                  <div
                    className={`shrink-0 w-16 h-16 mt-9 mb-6 rounded-2xl flex items-center justify-center text-2xl bg-linear-to-br ${item.color} text-white shadow-xl group-hover:rotate-12 transition-transform`}
                  >
                    <i className={item.icon}></i>
                  </div>

                  <span className="text-primary-400 font-bold text-[10px] uppercase tracking-widest mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-black mb-1 leading-tight flex items-center justify-center">
                    {item.degree}
                  </h3>
                  <p className="text-indigo-300 font-bold text-xs mb-4 uppercase tracking-tighter">
                    {item.institution}
                  </p>

                  <p className="text-slate-400 leading-relaxed text-[13px] italic overflow-hidden line-clamp-5">
                    {item.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
