import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSearch,
  FaJs,
  FaReact,
  FaNodeJs,
  FaTerminal,
  FaDatabase,
  FaPalette,
  FaCube,
  FaCode,
  FaRobot,
  FaBrain,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostman,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import Parallax from "./Parallax";

const SkillBar = ({ name, icon, percentage }) => {
  return (
    <div className="flex flex-col gap-2 p-4 border border-white/5 bg-card/20 cyber-chamfer-sm group hover:border-accent/40 transition-all duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl text-accent/60 group-hover:text-accent transition-all duration-500">
            {icon}
          </span>
          <span className="text-[10px] md:text-xs font-heading font-black text-white uppercase tracking-widest whitespace-nowrap">
            {name}
          </span>
        </div>
      </div>

      <div className="skill-loader-container border-white/20">
        <div
          className="skill-progress-fill bg-accent shadow-[0_0_10px_rgba(0, 255, 136, 0.3)]"
          style={{ "--target-width": `${percentage}%` }}
          data-percentage={`${percentage}%`}
        ></div>
      </div>
    </div>
  );
};

const TechStack = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, percentage: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 90 },
    { name: "Javascript", icon: <FaJs />, percentage: 88 },
    { name: "React.js", icon: <FaReact />, percentage: 92 },
    { name: "Next.js", icon: <FaCube />, percentage: 80 },
    { name: "TailwindCSS", icon: <SiTailwindcss />, percentage: 95 },
    { name: "Node.js", icon: <FaNodeJs />, percentage: 85 },
    { name: "Express.js", icon: <SiExpress />, percentage: 75 },
    { name: "Adobe Illustrator", icon: <FaPalette />, percentage: 85 },
    { name: "MongoDB", icon: <FaDatabase />, percentage: 70 },
    { name: "Typescript", icon: <SiTypescript />, percentage: 78 },
    { name: "Postman", icon: <SiPostman />, percentage: 85 },
    { name: "API JSON", icon: <FaCode />, percentage: 92 },
    { name: "AI Driven Logic", icon: <FaRobot />, percentage: 88 },
    { name: "Python", icon: <FaPython />, percentage: 70 },
    { name: "Research Analytics", icon: <FaSearch />, percentage: 82 },
  ];

  return (
    <section className="py-12 relative overflow-hidden px-4 sm:px-6 lg:px-10">
      {/* Industrial Section Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent font-mono text-[9px] tracking-[0.4em] uppercase font-bold animate-pulse">
            // RESOURCE_RESERVORY
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter text-white">
          Technical Skills
        </h2>
        {/* Advanced Cybernetic Alignment Underline */}
        <div className="flex items-center justify-center w-full max-w-md mt-4 opacity-90">
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent/20 relative overflow-hidden rotate-180 cyber-chamfer">
            <div className="absolute inset-0 w-[200%] bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_2s_ease-in-out_infinite]"></div>
          </div>
          <div className="mx-3 flex items-center gap-2">
            <div className="w-1 h-2 bg-accent/50 -skew-x-12"></div>
            <div className="relative w-2 h-2 flex items-center justify-center border border-accent rotate-45 shadow-neon">
              <div className="absolute w-1 h-1 bg-accent animate-ping"></div>
              <div className="w-0.5 h-0.5 bg-accent relative z-10"></div>
            </div>
            <div className="w-1 h-2 bg-accent/50 skew-x-12"></div>
          </div>
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent/20 relative overflow-hidden cyber-chamfer">
            <div className="absolute inset-0 w-[200%] bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      <Parallax speed={0.05} className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-4 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <SkillBar key={i} {...skill} />
          ))}
        </div>
      </Parallax>
    </section>
  );
};

export default TechStack;
