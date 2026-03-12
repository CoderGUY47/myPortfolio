import React from 'react';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiPostman, SiPython } from 'react-icons/si';

const TechStack = () => {
  const row1 = [
    { name: "HTML5", icon: <FaHtml5 />, level: "EXPERT" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "EXPERT" },
    { name: "Javascript", icon: <SiJavascript />, level: "ADVANCED" },
    { name: "React.js", icon: <SiReact />, level: "ADVANCED" },
    { name: "Next.js", icon: <SiNextdotjs />, level: "SKILLED" },
    { name: "Tailwind", icon: <SiTailwindcss />, level: "EXPERT" },
  ];

  const row2 = [
    { name: "Node.js", icon: <SiNodedotjs />, level: "ADVANCED" },
    { name: "Express", icon: <SiExpress />, level: "SKILLED" },
    { name: "MongoDB", icon: <SiMongodb />, level: "SKILLED" },
    { name: "Postman", icon: <SiPostman />, level: "ADVANCED" },
    { name: "Typescript", icon: <SiTypescript />, level: "SKILLED" },
    { name: "Python", icon: <SiPython />, level: "SKILLED" }
  ];

  const infiniteRow1 = [...row1, ...row1, ...row1];
  const infiniteRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Industrial Section Header */}
      <div className="flex flex-col items-center mb-10 px-6 text-center">
        <div className="flex items-center gap-3 mb-4">
           <span className="text-accent font-mono text-[9px] tracking-[0.4em] uppercase font-bold animate-pulse">
             // RESOURCE_RESERVORY
           </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter text-white">
          Programming Languages
        </h2>
        {/* Progress HUD Scanning Bar */}
        <div className="relative w-64 h-1 mt-6 overflow-hidden bg-white/5 rounded-full border border-white/5">
           <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_4s_linear_infinite]"></div>
        </div>
      </div>

      {/* Kinetic Data Sliders */}
      <div className="space-y-4 w-full">
        {/* Row 1: Forward Motion */}
        <div className="relative group flex items-center bg-card/10 border border-white/5 cyber-chamfer-sm py-4 overflow-hidden backdrop-blur-sm">
          {/* Static Scanline Overlay */}
          <div className="absolute inset-0 bg-repeat-x opacity-10 pointer-events-none z-10" 
               style={{ backgroundImage: 'linear-gradient(90deg, transparent 0%, #00ff88 50%, transparent 100%)', backgroundSize: '1000px 1px' }}></div>
          
          <div className="flex animate-[marquee_50s_linear_infinite] whitespace-nowrap">
            {infiniteRow1.map((lang, i) => (
              <div key={i} className="flex flex-col items-center gap-2 mx-12 group/item cursor-default relative">
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-foreground/20 group-hover/item:text-accent group-hover/item:shadow-neon transition-all duration-500 scale-100 group-hover/item:scale-110">
                    {lang.icon}
                  </span>
                  <span className="text-sm md:text-base font-heading font-black text-white/20 group-hover/item:text-white transition-all duration-500 uppercase tracking-[0.15em]">
                    {lang.name}
                  </span>
                </div>
                {/* Floating Proficiency HUD */}
                <div className="absolute -bottom-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                   <span className="text-[7px] font-mono text-accent border border-accent/20 px-1 bg-background/80 uppercase tracking-widest leading-none">
                     STAT: {lang.level}
                   </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Reverse Motion */}
        <div className="relative group flex items-center bg-card/10 border border-white/5 cyber-chamfer-sm py-4 overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-repeat-x opacity-10 pointer-events-none z-10" 
               style={{ backgroundImage: 'linear-gradient(90deg, transparent 0%, #ff00ff 50%, transparent 100%)', backgroundSize: '1000px 1px' }}></div>
          <div className="flex animate-[marquee-reverse_50s_linear_infinite] whitespace-nowrap">
            {infiniteRow2.map((lang, i) => (
              <div key={i} className="flex flex-col items-center gap-2 mx-12 group/item cursor-default relative">
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-foreground/20 group-hover/item:text-accent-secondary group-hover/item:shadow-neon-secondary transition-all duration-500 scale-100 group-hover/item:scale-110">
                    {lang.icon}
                  </span>
                  <span className="text-sm md:text-base font-heading font-black text-white/20 group-hover/item:text-white transition-all duration-500 uppercase tracking-[0.15em]">
                    {lang.name}
                  </span>
                </div>
                {/* Floating Proficiency HUD */}
                <div className="absolute -bottom-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                   <span className="text-[7px] font-mono text-accent-secondary border border-accent-secondary/20 px-1 bg-background/80 uppercase tracking-widest leading-none">
                     STAT: {lang.level}
                   </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
