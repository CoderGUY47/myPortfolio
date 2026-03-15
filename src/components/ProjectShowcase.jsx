import React, { useState } from "react";
import { FaExternalLinkAlt, FaPlus } from "react-icons/fa";
import Parallax from "./Parallax";

const ProjectShowcase = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: "PRJ_01",
      stream: "ERP_SOLUTIONS",
      date: "JAN 2025",
      title: "Oxpecker: Supply Chain Matrix",
      desc: "Enterprise-grade supply chain orchestration. Implementing complex logistics tracking and automated reporting protocols.",
      live: "https://oxpecker.pro.bd/",
      difficulty: "ADVANCED",
      image: "/images/c2c.png",
      gridClass: "lg:col-span-2",
      isFocus: true
    },
    {
      id: "PRJ_02",
      stream: "RETAIL_STREAMS",
      date: "FEB 2025",
      title: "E-Panda: Commerce Substrate",
      desc: "High-performance retail engine featuring real-time synchronization and unified state management.",
      live: "https://epanda-ecommerce.netlify.app/",
      difficulty: "EXPERT",
      image: "/images/e-panda-1.png",
      gridClass: "lg:col-span-2",
      isFocus: true
    },
    {
      id: "PRJ_03",
      stream: "OPS_VERIFICATION",
      date: "MAY 2025",
      title: "Spectral Issue Tracker",
      desc: "Deep-trace issue management.",
      live: "https://ph-5-github-issue-tracker.netlify.app/",
      difficulty: "EXPERT",
      image: "/images/ph-5-github-issue-tracker.netlify.app_home.html.png",
      gridClass: "lg:col-span-2",
      isFocus: true
    },
    {
      id: "PRJ_04",
      stream: "MOBILITY_CORE",
      date: "APR 2025",
      title: "Daverse: Mobility Protocol",
      desc: "Next-gen ride orchestration.",
      live: "https://coderguy47.github.io/daverse-rides/",
      difficulty: "STANDARD",
      image: "/images/daverse.png",
      gridClass: "lg:col-span-1",
      isFocus: true
    },
    {
      id: "PRJ_05",
      stream: "DATA_VISUALIZATION",
      date: "MAR 2025",
      title: "Nexus Dashboard",
      desc: "High-fidelity analytical matrix for real-time data monitoring and visualization.",
      live: "https://coderguy47.github.io/folio-dashboard/",
      difficulty: "ADVANCED",
      image: "/images/folio-dashboard.png",
      gridClass: "lg:col-span-1",
      isFocus: true
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Industrial Header */}
      <div className="flex flex-col items-center mb-16 text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/20 rounded-sm mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold">
            Practicing_Projects
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter text-white">
          Projects
        </h2>
        {/* Advanced Cybernetic Alignment Underline */}
        <div className="flex items-center justify-center w-full max-w-md mt-6 opacity-90">
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent/20 relative overflow-hidden rotate-180 cyber-chamfer">
            <div className="absolute inset-0 w-[200%] bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_2s_ease-in-out_infinite]"></div>
          </div>
          <div className="mx-4 flex items-center gap-2">
            <div className="w-1 h-3 bg-accent/50 -skew-x-12"></div>
            <div className="relative w-3 h-3 flex items-center justify-center border border-accent rotate-45 shadow-neon">
              <div className="absolute w-1.5 h-1.5 bg-accent animate-ping"></div>
              <div className="w-1 h-1 bg-accent relative z-10"></div>
            </div>
            <div className="w-1 h-3 bg-accent/50 skew-x-12"></div>
          </div>
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent/20 relative overflow-hidden cyber-chamfer">
            <div className="absolute inset-0 w-[200%] bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Bento Box Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 max-w-[1200px] mx-auto auto-rows-fr lg:h-[400px]"> 
        {visibleProjects.map((project) => (
          <a
            key={project.id}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative bg-card/10 border border-accent md:border-white/5 cyber-chamfer-sm overflow-hidden 
              aspect-square md:aspect-auto hover:border-accent/40 transition-all duration-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] 
              flex flex-col justify-end ${project.gridClass}
            `}
          >
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0">
              <Parallax speed={-0.1} className="w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`max-w-none brightness-100 md:brightness-90 md:group-hover:grayscale-0 md:group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105 ${
                    project.isFocus 
                      ? "w-full h-full object-contain p-4" 
                      : "w-[120%] h-[120%] -mt-[10%] -ml-[10%] object-cover"
                  }`}
                />
              </Parallax>
            </div>

            {/* Targeting Overlays - Persistent on Mobile */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-accent"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-accent"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-accent"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-accent"></div>
            </div>

            {/* Metadata Tags */}
            <div className="absolute top-4 left-4 z-30">
              <span className="text-[8px] md:text-[10px] font-heading font-black text-accent tracking-[0.2em] bg-black/60 px-2 py-1 backdrop-blur-sm border border-accent/20">
                {project.id}
              </span>
            </div>

            {/* Hover Action Blur Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm z-40">
              <div className="p-3 bg-accent text-black scale-110 active:scale-95 transition-all cyber-chamfer-sm shadow-neon">
                <FaExternalLinkAlt />
              </div>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 w-full p-4 md:p-6 bg-linear-to-t from-black via-black/90 to-transparent pt-16 pointer-events-none">
              <h3 className="text-sm md:text-lg font-heading font-black text-white uppercase tracking-tight mb-1 group-hover:text-accent transition-colors truncate drop-shadow-lg">
                {project.title}
              </h3>
              <p className="text-[9px] md:text-[10px] font-medium text-foreground/50 leading-relaxed uppercase tracking-wider line-clamp-1 mt-1 transition-opacity">
                {project.desc}
              </p>
            </div>

            {/* Interactive Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent/40 shadow-[0_0_15px_rgba(0,255,136,0.8)] -translate-y-full md:group-hover:animate-[scan_3s_ease-in-out_infinite] pointer-events-none z-50"></div>
          </a>
        ))}
      </div>

      {!showAll && projects.length > 2 && (
        <div className="flex justify-center mt-12 px-6">
          <button
            onClick={() => setShowAll(true)}
            className="group flex items-center gap-3 px-8 py-3 bg-accent/10 border border-accent text-accent font-heading font-black uppercase tracking-widest cyber-chamfer-sm hover:bg-accent hover:text-black transition-all duration-500 shadow-neon"
          >
            <FaPlus className="text-xs group-hover:rotate-90 transition-transform duration-500" />
            See More Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;
