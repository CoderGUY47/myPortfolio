import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectShowcase = () => {
  const projects = [
    {
      id: "PRJ_01",
      stream: "RETAIL_SYNC",
      date: "JAN 2025",
      title: "Goods Panda: Luxury Retail",
      desc: "Architecting a high-end digital substrate for modern commerce. Focuses on premium visual fidelity and seamless state synchronization.",
      github: "https://github.com/CoderGUY47/goods-panda",
      live: "#",
      difficulty: "ADVANCED",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      gridClass: "lg:col-span-2 lg:row-span-2",
      isFocus: true
    },
    {
      id: "PRJ_02",
      stream: "DATA_VISUAL",
      date: "FEB 2025",
      title: "AI Nexus: Dashboard",
      desc: "Real-time AI visualization matrix. Implementing low-latency data streams and complex component orchestration.",
      github: "https://github.com/CoderGUY47/ai-nexus",
      live: "#",
      difficulty: "EXPERT",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      gridClass: "lg:col-span-2 lg:row-span-2",
      isFocus: true
    },
    {
      id: "PRJ_03",
      stream: "SYSTEMS_CORE",
      date: "MAR 2025",
      title: "E-Panda Store",
      desc: "Foundation-level e-commerce substrate. Scalable backend integration with Firebase.",
      github: "https://github.com/CoderGUY47/e-panda",
      live: "#",
      difficulty: "ADVANCED",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      gridClass: "md:col-span-2 lg:col-span-2",
      isFocus: true
    },
    {
      id: "PRJ_04",
      stream: "SECURE_AUTH",
      date: "APR 2025",
      title: "CyberVault Protocol",
      desc: "Zero-trust verification.",
      github: "#",
      live: "#",
      difficulty: "STANDARD",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      isFocus: false
    },
    {
      id: "PRJ_05",
      stream: "STATE_SYNC",
      date: "MAY 2025",
      title: "Quantum Manager",
      desc: "Global state engine.",
      github: "#",
      live: "#",
      difficulty: "EXPERT",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      gridClass: "col-span-1",
      isFocus: false
    }
  ];

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Industrial Header */}
      <div className="flex flex-col items-center mb-16 text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/20 rounded-sm mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <span className="text-[9px] font-mono tracking-widest text-accent uppercase font-bold">
            Project_Archive // V.24
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter text-white">
          Projects
        </h2>
        <div className="relative w-64 h-px mt-8 overflow-hidden bg-white/5">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_3s_linear_infinite]"></div>
        </div>
      </div>

      {/* 700px High Bento Box Grid Container */}
      <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-3 gap-4 h-[700px] w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group relative bg-card/10 border border-white/5 cyber-chamfer-sm overflow-hidden hover:border-accent/40 transition-all duration-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col justify-end ${project.gridClass}`}
          >
            {/* Background Image absolute coverage */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
            />

            {/* Targeting Overlays */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-accent"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-accent"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-accent"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-accent"></div>
            </div>

            {/* Metadata Tags */}
            <div className="absolute top-4 left-4 z-30">
               <span className="text-[10px] font-heading font-black text-accent tracking-[0.2em] bg-black/60 px-2 py-1 backdrop-blur-sm border border-accent/20">
                 {project.id}
               </span>
            </div>
            <div className="absolute top-4 right-4 z-30 hidden sm:block">
               <span className="text-[8px] font-mono text-white font-bold tracking-widest uppercase bg-black/60 px-2 py-1 backdrop-blur-sm border border-white/10">
                 {project.stream}
               </span>
            </div>

            {/* Hover Action Blur Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm z-40">
              <a
                href={project.live}
                className="p-3 bg-accent text-black hover:scale-110 active:scale-95 transition-all cyber-chamfer-sm shadow-neon btn-shine"
                title="Live Preview"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href={project.github}
                className="p-3 bg-white text-black hover:scale-110 active:scale-95 transition-all cyber-chamfer-sm shadow-xl btn-shine"
                title="Source Code"
              >
                <FaGithub />
              </a>
            </div>

            {/* Text Overlay Substrate */}
            <div className="relative z-10 w-full p-4 md:p-6 bg-linear-to-t from-black via-black/90 to-transparent pt-16 pointer-events-none">
               <h3 className="text-sm md:text-lg font-heading font-black text-white uppercase tracking-tight mb-1 group-hover:text-accent transition-colors leading-none truncate drop-shadow-lg">
                 {project.title}
               </h3>
               
               {project.isFocus ? (
                  <p className="text-[9px] md:text-[10px] font-medium text-foreground/50 leading-relaxed uppercase tracking-wider line-clamp-1 md:line-clamp-2 mt-2">
                    {project.desc}
                  </p>
               ) : (
                  <div className="flex items-center gap-2 mt-2 opacity-50">
                     <span className="text-[7px] font-mono text-white tracking-widest">{project.difficulty}_SCALE</span>
                  </div>
               )}
            </div>

            {/* Interactive Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent/40 shadow-[0_0_15px_rgba(0,255,136,0.8)] -translate-y-full group-hover:animate-[scan_3s_ease-in-out_infinite] pointer-events-none z-50"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
