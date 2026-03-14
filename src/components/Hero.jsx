import React from "react";
import { FaGithub, FaLinkedin, FaTerminal } from "react-icons/fa";
import Parallax from "./Parallax";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] pt-10 pb-6 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background HUD Accents */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Persona Context - Centered on Mobile, Left on LG */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <Parallax
            speed={0.1}
            className="w-full flex flex-col items-center lg:items-start z-20"
          >
            <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span className="text-[9px] font-mono tracking-widest text-accent uppercase">
                SYSTEM_INITIALIZED // 2025-2026
              </span>
            </div>

            {/* Name & Title Heading */}
            <div className="flex flex-col mb-8 select-none items-center lg:items-start">
              {/* Row 1: S.M. (Glitch White) */}
              <div className="relative group">
                <h1
                  className="text-4xl md:text-6xl font-heading font-black leading-[0.85] tracking-tight uppercase text-white cyber-glitch"
                  data-text="S.M."
                >
                  S.M.HASAN
                </h1>
              </div>

              {/* Row 3: FRONTEND RECENT (Pink Gradient) */}
              <h1 className="text-4xl md:text-6xl font-heading font-black leading-[0.85] tracking-tight uppercase bg-linear-to-r from-accent-secondary to-accent-secondary/40 bg-clip-text text-transparent">
                AI Driven FRONTEND Developer
              </h1>

              {/* Row 4: FUTURE MERN STACK (Blue Gradient)
            <h1 className="text-4xl md:text-5xl font-heading font-black leading-[0.85] tracking-tight uppercase bg-linear-to-r from-accent-tertiary to-accent-tertiary/40 bg-clip-text text-transparent">
              FUTURE MERN STACK
            </h1> */}
            </div>

            <p className="max-w-xl mx-auto lg:ml-0 text-white  font-normal font-mono text-left text-sm leading-relaxed mb-10 uppercase tracking-widest">
              By integrating robust{" "}
              <span className="text-accent font-black text-lg">
                RESTful APIs
              </span>{" "}
              with modern frontend stacks, I ensure your web applications <br />
              <span className="text-accent-secondary font-black text-lg">
                {" "}
                stay fast, synchronized, and scalable.
              </span>{" "}
              <br />
              🖇️ UNDERSTANDING YOUR EXPECTATIONS VIA COMMUNICATION, I CAN GET
              YOU A BETTER OUTPUT without lag. <br />
              📩 𝗟𝗲𝘁’𝘀 𝗧𝗮𝗹𝗸: CONTACT with ME ON{" "}
              <span className="text-accent font-black text-lg">
                LINKEDIN
              </span>{" "}
              OR REACH OUT VIA EMAIL:{" "}
              <span className="text-accent font-black text-lg">
                s.m.hasan4599@gmail.com
              </span>{" "}
              <br />
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/CoderGUY47"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border-0 border-white/10 flex items-center justify-center text-4xl text-foreground/90 hover:text-accent/70 hover:border-accent hover:neon-glow cyber-chamfer-sm transition-all"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/dev-s-hasan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border-0 border-white/10 flex items-center justify-center text-4xl text-foreground/90 hover:text-accent/70 hover:border-accent hover:neon-glow cyber-chamfer-sm transition-all"
              >
                <FaLinkedin />
              </a>
            </div>
          </Parallax>
        </div>

        {/* Persona Profile HUD - Fashionable High-Tech Refinement */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end group">
          <div className="relative w-full max-w-[550px] aspect-square cyber-chamfer-sm border border-white/5 bg-white/2 p-3 transition-all duration-700 hover:border-accent/40 hover:bg-white/5 hover:shadow-[0_0_50px_rgba(0, 255, 136, 0.1)]">
            {/* Background Kinetic Glow */}
            <div className="absolute inset-0 bg-accent/2 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl pointer-events-none"></div>

            {/* Elite Corner Accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/20 group-hover:border-accent transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/20 group-hover:border-accent transition-colors duration-500"></div>

            {/* Visual Architecture Container */}
            <div className="w-full h-full relative overflow-hidden cyber-chamfer-sm bg-background/80">
              {/* Vertical Scanning Active Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent/40 shadow-[0_0_15px_rgba(0, 255, 136, 0.8)] z-20 animate-[scan_4s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Fashionable Targeting Brackets */}
              <div className="absolute inset-0 z-40 pointer-events-none">
                <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-accent opacity-0 group-hover:opacity-100 group-hover:top-4 group-hover:left-4 transition-all duration-500"></div>
                <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-accent opacity-0 group-hover:opacity-100 group-hover:top-4 group-hover:right-4 transition-all duration-500"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-accent opacity-0 group-hover:opacity-100 group-hover:bottom-4 group-hover:left-4 transition-all duration-500"></div>
                <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-accent opacity-0 group-hover:opacity-100 group-hover:bottom-4 group-hover:right-4 transition-all duration-500"></div>
              </div>

              {/* Chromatic Aberration Container */}
              <div className="w-full h-full relative group-hover:opacity-90">
                <Parallax speed={-0.05} className="w-full h-full">
                  <img
                    src="/images/bio-pic-png.png"
                    alt="S.M.HASAN"
                    className="w-[110%] h-[110%] -mt-[5%] -ml-[5%] max-w-none object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                </Parallax>
              </div>

              {/* Internal Targeting Overlay */}
              <div className="absolute inset-4 border border-white/5 border-dashed pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"></div>

              {/* Fixed Metadata HUD Labels */}
              <div className="absolute top-4 left-4 z-30 flex flex-col gap-1">
                <span className="text-[7px] font-mono text-accent bg-background/80 px-1 border border-accent/20">
                  UPLINK_SECURE
                </span>
                <span className="text-[6px] font-mono text-white/40">
                  SERVICE_RELIABILITY: 99.9%
                </span>
              </div>

              <div className="absolute bottom-4 right-4 z-30 flex flex-col items-end gap-1 text-right">
                <span className="text-[7px] font-mono text-accent-secondary bg-background/80 px-1 border border-accent-secondary/20 uppercase tracking-widest">
                  Bio_Verified
                </span>
                <span className="text-[6px] font-mono text-white/40 uppercase">
                  Client_Success_Rate: 100%
                </span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-accent/40"></div>
                  <div className="w-1 h-1 bg-accent/20"></div>
                  <div className="w-1 h-1 bg-accent/10"></div>
                </div>
              </div>

              {/* Hover Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
