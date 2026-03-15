import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSearch,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPalette,
  FaCube,
  FaCode,
  FaRobot,
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
    <div className="flex flex-col gap-2 p-3 md:p-4 border border-accent md:border-white/5 bg-card/20 cyber-chamfer-sm group lg:hover:border-accent/40 transition-all duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-lg md:text-xl text-accent lg:text-accent/60 lg:group-hover:text-accent transition-all duration-500">
            {icon}
          </span>
          {/*you can change how the words look right here*/}
          <span className="text-[10px] md:text-sm font-heading font-black text-white uppercase tracking-widest whitespace-nowrap">
            {name}
          </span>
        </div>
      </div>

      <div className="skill-loader-container border-white/20 h-2 md:h-1.5 overflow-hidden bg-white/5">
        <div
          className="skill-progress-fill bg-accent shadow-[0_0_10px_rgba(0, 255, 136, 0.3)] h-full transition-all duration-1000 ease-out"
          style={{ "--target-width": `${percentage}%` }}
          data-percentage={`${percentage}%`}
        ></div>
      </div>
    </div>
  );
};

const TechStack = () => {
  const [showAll, setShowAll] = React.useState(false);

  const coreSkills = [
    { name: "HTML5", icon: <FaHtml5 />, percentage: 70 },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 70 },
    { name: "Javascript", icon: <FaJs />, percentage: 50 },
    { name: "API JSON", icon: <FaCode />, percentage: 50 },
    { name: "React.js", icon: <FaReact />, percentage: 60 },
    { name: "Next.js", icon: <FaCube />, percentage: 45 },
    { name: "TailwindCSS", icon: <SiTailwindcss />, percentage: 70 },
  ];

  const optionalSkills = [
    { name: "Adobe Illustrator", icon: <FaPalette />, percentage: 90 },
    { name: "MongoDB", icon: <FaDatabase />, percentage: 40 },
    { name: "Typescript", icon: <SiTypescript />, percentage: 30 },
    { name: "Node.js", icon: <FaNodeJs />, percentage: 30 },
    { name: "Express.js", icon: <SiExpress />, percentage: 30 },
    { name: "Postman", icon: <SiPostman />, percentage: 30 },
    { name: "AI Driven", icon: <FaRobot />, percentage: 88 },
    { name: "Python", icon: <FaPython />, percentage: 40 },
    { name: "Research", icon: <FaSearch />, percentage: 70 },
  ];

  return (
    <section className="py-12 relative overflow-hidden px-4 md:px-6 lg:px-10">
      {/*the top of this section looks like a strong machine*/}
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase font-bold animate-pulse">
            // RESOURCE_RESERVORY
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter text-white">
          Technical Skills
        </h2>
        {/*this glowing line is like a guiding light for my skills*/}
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
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 max-w-4xl mx-auto">
          {coreSkills.map((skill, i) => (
            <SkillBar key={i} {...skill} />
          ))}
          
          {showAll && (
            <>
              <div className="col-span-full mt-6 mb-2">
                <h4 className="text-[9px] font-mono text-accent/60 uppercase tracking-[0.3em] flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-accent/20 border border-accent/40 rotate-45"></div>
                   Secondary Specialized Modules
                </h4>
              </div>
              {optionalSkills.map((skill, i) => (
                <SkillBar key={`optional-${i}`} {...skill} />
              ))}
            </>
          )}
        </div>

        {/*press this to see more of what i can do*/}
        <div className="mt-8 flex justify-center">
           <button 
             onClick={() => setShowAll(!showAll)}
             className="group relative px-8 py-3 bg-white/5 border border-white/10 cyber-chamfer-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
           >
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent"></div>
              <div className="flex items-center gap-4">
                 <div className="flex flex-col items-end">
                    <span className="text-[7px] font-mono text-white/40 uppercase tracking-widest leading-none">Status</span>
                    <span className="text-[10px] font-heading font-black text-accent uppercase tracking-widest">{showAll ? 'COLLAPSE' : 'EXPAND'}</span>
                 </div>
                 <div className="w-px h-6 bg-white/10 group-hover:bg-accent/30 transition-colors"></div>
                 <span className="text-xs font-heading font-black text-white uppercase tracking-[0.2em]">
                    {showAll ? 'LESS_MODULES' : 'SEE_OPTIONAL_SKILLS'}
                 </span>
                 <div className={`text-accent text-sm transition-transform duration-500 ${showAll ? 'rotate-180' : 'rotate-0'}`}>
                    <FaRobot className="animate-pulse" />
                 </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent"></div>
           </button>
        </div>
      </Parallax>
    </section>
  );
};

export default TechStack;
