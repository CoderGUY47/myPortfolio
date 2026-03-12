import React from 'react';
import { FaCode, FaRobot, FaLayerGroup, FaServer, FaBolt, FaSyncAlt } from 'react-icons/fa';

const Capabilities = () => {
  const services = [
    { 
      icon: <FaLayerGroup />, 
      title: "UI_UX_ARCHITECTURE", 
      status: "DESIGN_READY",
      id: "PHASE_01"
    },
    { 
      icon: <FaCode />, 
      title: "API-FETCHING", 
      status: "UPLINK_STABLE",
      id: "PHASE_02"
    },
    { 
      icon: <FaRobot />, 
      title: "AI_DRIVEN_LOGIC", 
      status: "LLM_SYNCED",
      id: "PHASE_03"
    },
    { 
      icon: <FaServer />, 
      title: "BACKEND_ENGINEERING", 
      status: "DB_OPTIMIZED",
      id: "PHASE_04"
    },
    { 
      icon: <FaBolt />, 
      title: "PERFORMANCE_SYNC", 
      status: "LOW_LATENCY",
      id: "PHASE_05"
    },
    { 
      icon: <FaSyncAlt />, 
      title: "SYSTEM_MAINTENANCE", 
      status: "ALIVE_PROTO",
      id: "PHASE_06"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Premium HUD Header */}
      <div className="flex flex-col items-center mb-16 text-center px-6">
        <div className="flex items-center gap-3 mb-4 opacity-50">
           <div className="w-8 h-px bg-accent"></div>
           <span className="text-[8px] font-mono tracking-[0.4em] text-accent uppercase font-bold">Client_Solutions_Protocol</span>
           <div className="w-8 h-px bg-accent"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter mb-4">
          SERVICES
        </h2>
        <div className="max-w-xl text-[10px] font-mono text-foreground/80 uppercase tracking-widest leading-relaxed">
           Engineering Scalable Substrates for High-Fidelity Digital Ecosystems. <br/>
           Verified_Engineering_Solutions // Ready_for_Deployment.
        </div>
      </div>

      {/* High-End Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <div 
            key={i} 
            className="group relative p-10 bg-gray-900/20 border border-white/15 cyber-chamfer-sm transition-all duration-700 hover:border-accent/40 hover:bg-card/40 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Background Kinetic Circuitry (Hover Only) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
                 style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #00ff88 1px, transparent 0)', backgroundSize: '16px 16px' }}>
            </div>

            {/* Corner ID Label */}
            <div className="absolute top-4 left-4 text-[7px] font-mono text-white/10 group-hover:text-accent transition-colors">
               {item.id}
            </div>

            {/* Icon Protocol Container */}
            <div className="relative mb-8">
               <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-16 h-16 border border-white/10 flex items-center justify-center text-2xl text-foreground/20 group-hover:text-accent group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] bg-background/50 transition-all duration-500 relative z-10">
                 {item.icon}
               </div>
            </div>

            {/* Service Designation */}
            <h3 className="text-xs font-heading font-black text-white group-hover:text-accent transition-colors tracking-[0.2em] uppercase mb-4">
              {item.title}
            </h3>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 bg-white/2 border border-white/5 rounded-full opacity-40 group-hover:opacity-100 transition-opacity">
               <span className="w-1 h-1 rounded-full bg-accent animate-pulse"></span>
               <span className="text-[7px] font-mono text-white tracking-widest uppercase">{item.status}</span>
            </div>

            {/* Bottom HUD Bar */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent group-hover:via-accent/40 transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
