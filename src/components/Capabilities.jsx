import React from "react";
import {
  FaCode,
  FaJs,
  FaReact,
  FaPalette,
  FaLayerGroup,
  FaSyncAlt,
} from "react-icons/fa";

const Capabilities = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "HTML5 & CSS3",
      status: "Robust_Scalable", 
      id: "PHASE_01",
    },
    {
      icon: <FaJs />,
      title: "JAVASCRIPT",
      status: "STABLE",
      id: "PHASE_02",
    },
    {
      icon: <FaReact />,
      title: "REACT_VITE",
      status: "STABLE",
      id: "PHASE_03",
    },
    {
      icon: <FaPalette />,
      title: "ADOBE_ILLUSTRATOR",
      status: "DESIGN_READY",
      id: "PHASE_04",
    },
    {
      icon: <FaLayerGroup />,
      title: "UI_UX_ARCHITECTURE",
      status: "SCALABLE_DESIGN",
      id: "PHASE_05",
    },
    {
      icon: <FaSyncAlt />,
      title: "API_FETCHING",
      status: "STABLE",
      id: "PHASE_06",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Premium HUD Header */}
      <div className="flex flex-col items-center mb-16 text-center px-6">
        <div className="flex items-center gap-3 mb-4 opacity-50">
          <div className="w-8 h-px bg-accent"></div>
          <span className="text-[8px] font-mono tracking-[0.4em] text-accent uppercase font-bold">
            Client_Solutions_Protocol
          </span>
          <div className="w-8 h-px bg-accent"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter mb-4">
          SERVICES
        </h2>

        {/* Advanced Cybernetic Alignment Underline */}
        <div className="flex items-center justify-center w-full max-w-md mb-8 opacity-90">
          {/* Left Beam (Shoots outward to the left) */}
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent/20 relative overflow-hidden rotate-180 cyber-chamfer">
            <div className="absolute inset-0 w-[200%] bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_2s_ease-in-out_infinite]"></div>
          </div>

          {/* Core Synchronization Node */}
          <div className="mx-4 flex items-center gap-2">
            <div className="w-1 h-3 bg-accent/50 -skew-x-12"></div>
            <div className="relative w-3 h-3 flex items-center justify-center border border-accent rotate-45 shadow-neon">
              <div className="absolute w-1.5 h-1.5 bg-accent animate-ping"></div>
              <div className="w-1 h-1 bg-accent relative z-10"></div>
            </div>
            <div className="w-1 h-3 bg-accent/50 skew-x-12"></div>
          </div>

          {/* Right Beam (Shoots outward to the right) */}
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent/20 relative overflow-hidden cyber-chamfer">
            <div className="absolute inset-0 w-[200%] bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_2s_ease-in-out_infinite]"></div>
          </div>
        </div>

        <div className="max-w-xl text-xs font-mono text-white/80 uppercase tracking-widest leading-relaxed">
          Engineering Scalable Substrates for High-Fidelity Digital Ecosystems.{" "}
          <br />
          Verified_Engineering_Solutions // Ready_for_Deployment.
        </div>
      </div>

      {/* High-End Services Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 px-4 md:px-0">
        {services.map((item, i) => (
          <div
            key={i}
            className="group relative p-6 md:p-10 bg-gray-900/20 border border-accent md:border-white/15 cyber-chamfer-sm transition-all duration-700 lg:hover:border-accent/40 lg:hover:bg-card/40 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Background Kinetic Circuitry (Hover Only) */}
            <div
              className="absolute inset-0 opacity-5 md:opacity-0 lg:group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #00ff88 1px, transparent 0)",
                backgroundSize: "16px 16px",
              }}
            ></div>

            {/* Corner ID Label - Persistent on Mobile */}
            <div className="absolute top-2 left-2 md:top-4 md:left-4 text-[6px] md:text-[7px] font-mono text-accent md:text-white/10 lg:group-hover:text-accent transition-colors">
              {item.id}
            </div>

            {/* Icon Protocol Container */}
            <div className="relative mb-4 md:mb-8">
              <div className="absolute inset-0 bg-accent/20 blur-xl md:opacity-0 lg:group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 md:w-16 md:h-16 border border-accent md:border-white/10 flex items-center justify-center text-xl md:text-2xl text-accent md:text-foreground/20 lg:group-hover:text-accent lg:group-hover:border-accent lg:group-hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] bg-background/50 transition-all duration-500 relative z-10">
                {item.icon}
              </div>
            </div>

            {/* Service Designation */}
            <h3 className="text-[8px] md:text-xs font-heading font-black text-white lg:group-hover:text-accent transition-colors tracking-[0.2em] uppercase mb-3 md:mb-4">
              {item.title}
            </h3>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-2 py-0.5 md:px-3 md:py-1 bg-white/5 border border-white/10 rounded-full md:opacity-40 lg:group-hover:opacity-100 transition-opacity">
              <span className="w-1 h-1 rounded-full bg-accent animate-pulse"></span>
              <span className="text-[6px] md:text-[7px] font-mono text-white tracking-widest uppercase">
                {item.status}
              </span>
            </div>

            {/* Bottom HUD Bar */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/20 md:via-white/5 to-transparent lg:group-hover:via-accent/40 transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
