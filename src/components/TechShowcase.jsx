import React from "react";
import {
  FaCircle,
  FaTerminal,
  FaDatabase,
  FaLock,
  FaBolt,
} from "react-icons/fa";
import Parallax from "./Parallax";

const TechShowcase = () => {
  const architectures = [
    {
      label: "SCALABLE_UPLINK",
      icon: <FaBolt />,
      desc: "Optimized state synchronization using modern caching and context reduction. Sub-50ms interaction loops.",
    },
    {
      label: "ZERO_TRUST_SECURITY",
      icon: <FaLock />,
      desc: "Encrypted transmission channels. Implementations of strict JWT-based auth and sanitized payload verification.",
    },
    {
      label: "PERSISTENT_STORAGE",
      icon: <FaDatabase />,
      desc: "Document-oriented database structuring for dynamic schemas. Lightning-speed read/write pipelines.",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/*this repeating background makes me feel like i am in the matrix*/}
      <div
        className="absolute inset-0 bg-repeat opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #00ff88 1px, transparent 1px), linear-gradient(180deg, #00ff88 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/*the top words that make my work look very professional*/}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="flex items-center gap-3 mb-4 opacity-50">
            <div className="w-8 h-px bg-accent-tertiary"></div>
            <span className="text-accent-tertiary font-mono text-[9px] tracking-[0.4em] uppercase font-bold">
              System_Logistics
            </span>
            <div className="w-8 h-px bg-accent-tertiary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter drop-shadow-2xl">
            ENGINEERING STANDARDS
          </h2>
          {/*this glowing line is like a guiding light for my system*/}
          <div className="flex items-center justify-center w-full max-w-md mt-8 opacity-90">
            {/*the light beam travels to the left side*/}
            <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent/20 relative overflow-hidden rotate-180 cyber-chamfer">
              <div className="absolute inset-0 w-[200%] bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_2s_ease-in-out_infinite]"></div>
            </div>

            {/*everything meets right here in the center*/}
            <div className="mx-4 flex items-center gap-2">
              <div className="w-1 h-3 bg-accent/50 -skew-x-12"></div>
              <div className="relative w-3 h-3 flex items-center justify-center border border-accent rotate-45 shadow-neon">
                <div className="absolute w-1.5 h-1.5 bg-accent animate-ping"></div>
                <div className="w-1 h-1 bg-accent relative z-10"></div>
              </div>
              <div className="w-1 h-3 bg-accent/50 skew-x-12"></div>
            </div>

            {/*the light beam travels to the right side*/}
            <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent/20 relative overflow-hidden cyber-chamfer">
              <div className="absolute inset-0 w-[200%] bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/*the left side holds all the strong building blocks*/}
          <div className="flex-1 w-full space-y-10">
            {architectures.map((item, i) => (
              <div
                key={i}
                className="group relative flex gap-6 p-6 border border-white/5 bg-background/50 hover:bg-card/40 hover:border-accent-tertiary/30 cyber-chamfer-sm transition-all duration-700"
              >
                {/*this small line connects my ideas together*/}
                <div className="absolute left-10 top-full h-10 w-px bg-white/5 group-hover:bg-accent-tertiary/20 last:hidden transition-colors"></div>

                <div className="relative">
                  {/*a light ring that grows when you look at it*/}
                  <div className="absolute inset-0 border border-accent-tertiary/20 rounded-full scale-50 opacity-0 group-hover:scale-[2.5] group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-foreground/40 text-lg group-hover:text-accent-tertiary group-hover:border-accent-tertiary transition-all duration-500 bg-background z-10 relative">
                    {item.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-heading font-black text-white uppercase tracking-widest mb-2 group-hover:text-accent-tertiary transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-[10px] font-mono text-foreground/40 uppercase leading-relaxed tracking-wide group-hover:text-foreground/80 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/*this tiny blinking light tells me everything is okay*/}
                <div className="absolute right-6 top-6 flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 bg-accent-tertiary rounded-full animate-pulse"></div>
                  <span className="text-[7px] font-mono text-accent-tertiary uppercase tracking-widest">
                    OK
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/*the right side looks like a secret computer screen*/}
          <div className="flex-1 w-full perspective-[1000px]">
            <Parallax speed={-0.08} className="w-full">
              {/*this box moves when i look around the screen*/}
              <div className="relative transform-gpu transition-all duration-1000 hover:rotate-y-[-5deg] hover:rotate-x-[5deg] hover:shadow-[0_0_80px_rgba(0,212,255,0.1)]">
                {/*the shadow makes the box look like it is glowing*/}
                <div className="absolute inset-0 bg-accent-tertiary/5 blur-[50px] -z-10 rounded-full"></div>

                <div className="bg-black/80 border border-accent-tertiary/30 cyber-chamfer-sm overflow-hidden relative group backdrop-blur-xl">
                  {/*the top part of the secret computer screen*/}
                  <div className="bg-white/5 px-6 py-3 flex items-center justify-between border-b border-accent-tertiary/20 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <FaTerminal className="text-accent-tertiary text-xs" />
                      <span className="text-[9px] font-mono text-accent-tertiary font-bold uppercase tracking-[0.3em]">
                        MERN_SERVER.core
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-red-500/80 transition-colors duration-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-yellow-500/80 transition-colors duration-700 delay-75"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-green-500/80 transition-colors duration-700 delay-150"></div>
                    </div>
                  </div>

                  {/*this is where the magic words are written*/}
                  <div className="p-8 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto selection:bg-accent-tertiary selection:text-black">
                    <pre className="text-foreground/60 relative">
                      <code className="block w-full">
                        <div className="hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-300">
                          <span className="text-accent-secondary">import</span>{" "}
                          <span className="text-white">
                            {"{"} IntelligenceCore {"}"}
                          </span>{" "}
                          <span className="text-accent-secondary">from</span>{" "}
                          <span className="text-accent">'@ai/nexus'</span>;
                        </div>
                        <div className="hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-300 mt-2">
                          <span className="text-accent-tertiary">const</span>{" "}
                          <span className="text-white">ServerEnv</span> ={" "}
                          <span className="text-accent-tertiary">await</span>{" "}
                          <span className="text-white">Core</span>.
                          <span className="text-accent">initSystem</span>(
                          <span className="text-accent">{"{"}</span>
                        </div>
                        <div className="hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-300">
                          &nbsp;&nbsp;architecture:{" "}
                          <span className="text-accent">
                            'HIGH_AVAILABILITY'
                          </span>
                          ,
                        </div>
                        <div className="hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-300">
                          &nbsp;&nbsp;auth_mode:{" "}
                          <span className="text-white">env</span>.
                          <span className="text-accent-secondary">
                            ZERO_TRUST
                          </span>
                          ,
                        </div>
                        <div className="hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-300">
                          &nbsp;&nbsp;auto_scale:{" "}
                          <span className="text-accent-tertiary">true</span>
                        </div>
                        <div className="hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-300">
                          <span className="text-accent">{"}"}</span>);
                        </div>
                        <div className="mt-4 hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-300">
                          <span className="text-foreground/30">
                            //making the computer brain think really hard...
                          </span>
                        </div>
                        <div className="hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-300">
                          <span className="text-white">ServerEnv</span>.
                          <span className="text-accent">deploy</span>();
                        </div>
                        <div className="flex items-center mt-2 px-2 -mx-2">
                          <span className="text-accent-tertiary mr-2">
                            &gt;
                          </span>
                          <span className="text-accent font-bold group-hover:animate-pulse">
                            SYSTEM_ONLINE_&_VERIFIED
                          </span>
                          <span className="w-2 h-4 bg-accent ml-2 animate-pulse"></span>
                        </div>
                      </code>
                    </pre>
                  </div>

                  {/*a laser scans up and down to check my work*/}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-tertiary/40 shadow-[0_0_15px_rgba(0,212,255,0.8)] -translate-y-full animate-[scan_2s_ease-in-out_infinite] pointer-events-none z-50"></div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
