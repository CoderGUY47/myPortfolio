import React, { useEffect, useState, useRef } from "react";

const Protocol = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = rect.top - windowHeight / 2;
      const total = rect.height;
      const progress = Math.min(Math.max(-start / total, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      id: "01",
      title: "Bachelor of Science (B.Sc.)",
      desc: "Computer Science and Engineering @ Daffodil International University (Ashulia). Deep-diving into high-performance software architectures and scalable digital ecosystems.",
      status: "ACTIVE_PROTOCOL",
      date: "2026 // EXPECTED",
      gpa: "NOT_PUBLISHED_YET"
    },
    {
      id: "02",
      title: "Higher Secondary Cert. (HSC)",
      desc: "Science Stream @ Mohammadpur Govt. College, Dhaka. Advanced grounding in mathematical logic and physical science. Achievement: 3.75 SCALE.",
      status: "ARCHIVED_UPLINK",
      date: "2019 // SYNCED",
      gpa: "3.75"
    },
    {
      id: "03",
      title: "Secondary School Cert. (SSC)",
      desc: "Science Stream @ Dhanmondi Govt. Boys School, Dhaka. Initial initialization of technical foundations and core engineering principles. Achievement: 4.98 SCALE.",
      status: "CORE_INITIALIZED",
      date: "2017 // SYNCED",
      gpa: "4.91"
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 px-6 relative bg-background overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        {/* Elite Heading Section */}
        <div className="text-center mb-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/20 rounded-sm mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold">
            Foundation_Logs
          </span>
        </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter text-white">
            Educational BG
          </h2>
          {/* Advanced Cybernetic Alignment Underline */}
          <div className="flex items-center justify-center w-full max-w-md mt-8 opacity-90">
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
        </div>

        <div className="relative w-full max-w-4xl">
          {/* Central Vertical Timeline Core */}
          <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/5 -translate-x-1/2 hidden md:block">
            {/* Main scroll progress line */}
            <div
              className="absolute top-0 left-0 w-full bg-accent shadow-neon transition-all duration-300 ease-out z-0"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className={`relative flex flex-col md:flex-row items-center group ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content Panel - High-End Premium Box */}
                <div className="flex-1 w-full max-w-sm md:max-w-md">
                  <div
                    className={`
                      relative p-8 border border-accent md:border-white/5 bg-background/80 backdrop-blur-md cyber-chamfer-sm transition-all duration-700 
                      lg:hover:border-accent/40 lg:hover:bg-card/40 hover:shadow-[0_0_40px_rgba(0,255,136,0.05)]
                      ${scrollProgress > i / (steps.length - 1) ? "border-accent" : ""}
                   `}
                  >
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent md:border-white/10 lg:group-hover:border-accent transition-colors duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent md:border-white/10 lg:group-hover:border-accent transition-colors duration-500"></div>

                    <div className="flex justify-between items-start mb-4">
                      <span className="text-accent font-mono text-[9px] font-bold tracking-[0.2em] px-2 py-0.5 bg-accent/10 border border-accent/20 uppercase">
                        PHASE_{step.id}
                      </span>
                      <span className="text-[8px] font-mono text-white/40 tracking-widest">
                        {step.date}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-heading font-black text-white uppercase mb-4 leading-none group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[10px] font-mono text-foreground/40 leading-relaxed uppercase tracking-wider mb-6">
                      {step.desc}
                    </p>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[7px] font-mono text-white/30 tracking-[0.3em] uppercase">
                        {step.status}
                      </span>
                      <div className="flex gap-1">
                        <div
                          className={`w-1 h-1 bg-accent transition-opacity ${scrollProgress > i / (steps.length - 1) ? "opacity-100 animate-pulse" : "opacity-20"}`}
                        ></div>
                        <div
                          className={`w-1 h-1 bg-accent transition-opacity delay-75 ${scrollProgress > i / (steps.length - 1) ? "opacity-100 animate-pulse" : "opacity-20"}`}
                        ></div>
                        <div
                          className={`w-1 h-1 bg-accent transition-opacity delay-150 ${scrollProgress > i / (steps.length - 1) ? "opacity-100 animate-pulse" : "opacity-20"}`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cybernetic Alignment Node */}
                <div className="relative w-16 h-16 hidden md:flex items-center justify-center z-20">
                  {/* Faint Glow Circle Behind */}
                  <div className={`absolute w-10 h-10 rounded-full border border-accent/20 bg-accent/5 transition-all duration-700 ${scrollProgress >= (i / (steps.length - 1)) - 0.15 ? 'opacity-100 scale-100 shadow-[0_0_15px_rgba(0,255,136,0.3)]' : 'opacity-0 scale-50'}`}></div>

                  {/* Diamond Core */}
                  <div
                    className={`
                    w-4 h-4 rotate-45 bg-background flex items-center justify-center transition-all duration-500 relative z-10
                    ${scrollProgress >= (i / (steps.length - 1)) - 0.15 ? "border border-accent shadow-neon scale-100" : "border border-white/20 scale-75 opacity-50"}
                  `}
                  >
                    {/* Inner Square (Counter-rotated to be horizontal/vertical) */}
                    <div
                      className={`w-1.5 h-1.5 bg-accent -rotate-45 transition-all duration-500 delay-150 ${scrollProgress >= (i / (steps.length - 1)) - 0.15 ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                    ></div>
                  </div>
                </div>

                {/* Empty Side Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;
