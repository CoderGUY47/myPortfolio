import React from 'react';
import { FaUserAstronaut, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const AboutMe = () => {
  const traits = [
    {
      icon: <FaCode />,
      title: "Clean_Code_Manifesto",
      description: "Writing industrial-grade, predictable codebases with a focus on maintainability and geometric precision."
    },
    {
      icon: <FaLightbulb />,
      title: "Problem_Solver",
      description: "Deconstructing complex architectural bottlenecks into scalable, AI-integrated frontend solutions."
    },
    {
      icon: <FaRocket />,
      title: "Performance_First",
      description: "Optimizing every pixel and byte to ensure ultra-low latency and a fluid user experience."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* HUD Header */}
      <div className="flex flex-col items-center mb-12 text-center">
        <span className="text-accent font-mono text-[10px] tracking-[0.5em] block mb-2 uppercase select-none">
          // IDENTITY_PROFILE
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter text-white">
          About <span className="text-accent">Me</span>
        </h2>
        {/* Animated Scanning Underline */}
        <div className="relative w-48 h-0.5 mt-4 overflow-hidden bg-white/5 rounded-full">
           <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_3s_linear_infinite]"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Visual Terminal Side */}
        <div className="relative group p-1 bg-white/5 cyber-chamfer-sm border border-white/10 hover:border-accent/30 transition-all duration-700">
           {/* Terminal Top Bar */}
           <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/10">
              <div className="flex gap-1.5">
                 <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                 <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                 <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-[8px] font-mono text-white/20 tracking-widest uppercase">system_about.exe</span>
           </div>

           <div className="p-8 font-mono text-sm leading-relaxed text-foreground/80 lowercase">
              <p className="mb-6">
                <span className="text-accent">&gt; init sm_hasan.profile</span><br/>
                <span className="text-white/40">loading bio-substrate...</span><br/>
                i am an <span className="text-white font-bold italic">ai-driven frontend engineer</span> and <span className="text-white font-bold italic">mern architect</span> dedicated to building the next generation of digital interfaces.
              </p>
              
              <p className="mb-6">
                my mission is to bridge the gap between complex <span className="text-accent-secondary">ai logic</span> and high-performance <span className="text-accent-secondary">user interfaces</span>. i don't just build websites; i engineer high-fidelity digital ecosystems that are as robust as they are visually stunning.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8 opacity-60">
                 <div className="flex flex-col">
                    <span className="text-[10px] text-accent font-bold uppercase tracking-widest">Base_Location</span>
                    <span className="text-xs text-white">Dhaka, Bangladesh</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] text-accent font-bold uppercase tracking-widest">Global_Deploy</span>
                    <span className="text-xs text-white">Remote Ready</span>
                 </div>
              </div>
           </div>

           {/* Decorative Corner Accents */}
           <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/20"></div>
           <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent/20"></div>
        </div>

        {/* Traits Grid */}
        <div className="grid gap-6">
           {traits.map((trait, i) => (
             <div 
               key={i}
               className="group relative p-6 border border-white/5 bg-white/2 cyber-chamfer-sm transition-all duration-300 hover:border-accent/40 hover:bg-white/4"
             >
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-accent/10 border border-accent/20 text-accent text-xl cyber-chamfer-xs group-hover:bg-accent group-hover:text-black transition-all">
                      {trait.icon}
                   </div>
                   <div>
                      <h3 className="text-sm font-heading font-black text-white uppercase tracking-wider mb-2 group-hover:text-accent">
                         {trait.title}
                      </h3>
                      <p className="text-[11px] font-mono text-foreground/50 leading-relaxed uppercase">
                         {trait.description}
                      </p>
                   </div>
                </div>
                {/* Micro Status Node */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-accent/20 group-hover:bg-accent rounded-full animate-pulse"></div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
