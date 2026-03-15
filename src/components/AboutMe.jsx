import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCode, FaServer, FaPaintBrush, FaRobot, 
  FaRocket, FaGraduationCap, FaEnvelope, FaGithub,
  FaArrowLeft, FaLinkedinIn 
} from 'react-icons/fa';

const AboutMe = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Lighthouse_Score", value: "95+", color: "text-accent" },
    { label: "Attention_Window", value: "0.05s", color: "text-red-500" },
    { label: "Architecture", value: "Clean", color: "text-blue-400" },
    { label: "Deployment", value: "Ready", color: "text-green-500" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-secondary/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Navigation / Header */}
        <div className="flex items-center justify-between mb-16 border-b border-white/5 pb-8">
          <Link to="/" className="group flex items-center gap-3 text-accent hover:text-white transition-all duration-300">
            <div className="w-10 h-10 border border-accent/30 flex items-center justify-center cyber-chamfer-xs group-hover:bg-accent group-hover:text-black transition-all">
              <FaArrowLeft className="text-sm" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase underline-offset-4 group-hover:underline">
              Return_to_Nexus
            </span>
          </Link>
          <div className="hidden md:flex gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-end">
                <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">{stat.label}</span>
                <span className={`text-sm font-heading font-black tracking-tighter uppercase ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-start mb-24">
          <div>
            <span className="text-accent font-mono text-[10px] tracking-[0.5em] block mb-4 uppercase">
              // SUBJECT_IDENTIFICATION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tighter text-white mb-8 leading-[0.85]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[2px] bg-accent/30"></div>
                <span className="text-[10px] font-mono text-accent/60 tracking-[0.2em]">CURRENT_STATUS</span>
              </div>
              Frontend <span className="text-accent italic">Web Developer</span>
              <div className="mt-4 flex flex-col md:flex-row md:items-end gap-2 md:gap-4">
                <span className="text-xl md:text-2xl text-white/40 font-light lowercase font-mono tracking-tight">
                  & aiming_for
                </span>
                <span className="text-2xl md:text-4xl text-accent-secondary italic border-b-2 border-accent-secondary/20 pb-1">
                  MERN_Stack Architecture
                </span>
              </div>
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="px-3 py-1 border border-white/10 bg-white/5 rounded-full flex items-center gap-2">
                <FaGraduationCap className="text-accent text-xs" />
                <span className="text-[10px] font-mono text-white/70 uppercase">CSE @ Daffodil Int. University</span>
              </div>
              <div className="px-3 py-1 border border-accent/20 bg-accent/5 rounded-full flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                <span className="text-[10px] font-mono text-accent uppercase font-bold tracking-widest">Available_for_Global_Deploy</span>
              </div>
            </div>
            
            <div className="space-y-6 text-foreground/70 leading-relaxed text-sm md:text-base font-mono lowercase tracking-tight">
              <p>
                i am dedicated to building <span className="text-white font-bold italic">"dazzling,"</span> production-grade digital identities. in a digital landscape where you only have <span className="text-red-400">0.05 seconds</span> to capture a user's attention, i bridge the gap between complex business logic and high-performance user engagement.
              </p>
              <p>
                my engineering philosophy is rooted in <span className="text-white font-bold">clean architecture</span>, transparency, and scalability. i don’t just build functional sites; i optimize for <span className="text-accent">95+ google lighthouse scores</span>, ensuring zero perceived lag and seamless mobile-first responsiveness.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative border border-white/5 bg-white/2 p-1 cyber-chamfer-sm overflow-hidden">
               <img 
                 src="/images/bio-pic-png.png" 
                 alt="S.M. Hasan Profile" 
                 className="w-full lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
               />
               <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-accent/20 px-3 py-1.5 font-mono text-[9px] text-accent font-black tracking-widest uppercase">
                  v_2.0.26_build
               </div>
            </div>
          </div>
        </div>

        {/* Skill Matrix - Bento Grid Inspiration */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="p-8 border border-white/5 bg-white/2 cyber-chamfer-sm group hover:border-accent/40 transition-all">
             <FaPaintBrush className="text-accent text-3xl mb-6 group-hover:scale-110 transition-transform" />
             <h3 className="text-xs font-heading font-black text-white uppercase tracking-widest mb-3">Frontend_Mastery</h3>
             <p className="text-[10px] font-mono text-foreground/40 leading-relaxed uppercase">
                HTML5, CSS3, JavaScript, React.js paired with Tailwind CSS and Shadcn UI.
             </p>
          </div>
          <div className="p-8 border border-white/5 bg-white/2 cyber-chamfer-sm group hover:border-accent/40 transition-all">
             <FaServer className="text-accent text-3xl mb-6 group-hover:scale-110 transition-transform" />
             <h3 className="text-xs font-heading font-black text-white uppercase tracking-widest mb-3">Integration of Api & Json</h3>
             <p className="text-[10px] font-mono text-foreground/40 leading-relaxed uppercase">
                Robust and seamless RESTful API integrations for complex workflows.
             </p>
          </div>
          <div className="p-8 border border-white/5 bg-white/2 cyber-chamfer-sm group hover:border-accent/40 transition-all">
             <FaRocket className="text-accent text-3xl mb-6 group-hover:scale-110 transition-transform" />
             <h3 className="text-xs font-heading font-black text-white uppercase tracking-widest mb-3">Modern_UIUX</h3>
             <p className="text-[10px] font-mono text-foreground/40 leading-relaxed uppercase">
                High-end animations with Framer Motion and Bento-grid layouts that enhance user retention with glassmorphism.
             </p>
          </div>
          <div className="p-8 border border-white/5 bg-white/2 cyber-chamfer-sm group hover:border-accent/40 transition-all">
             <FaRobot className="text-accent text-3xl mb-6 group-hover:scale-110 transition-transform" />
             <h3 className="text-xs font-heading font-black text-white uppercase tracking-widest mb-3">AI_Driven_Eng</h3>
             <p className="text-[10px] font-mono text-foreground/40 leading-relaxed uppercase">
                Leveraging AI-assisted development (Cursor/Copilot) to accelerate cycles without compromising integrity.
             </p>
          </div>
        </div>

        {/* Detailed Bio / Experience Philosophy */}
        <div className="border border-white/5 bg-white/1 p-10 cyber-chamfer-sm mb-24 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -rotate-45 translate-x-12 -translate-y-12"></div>
           <h2 className="text-2xl font-heading font-black uppercase text-white mb-8 flex items-center gap-4">
              <span className="text-accent">#</span> The_Impact_Focus
           </h2>
           <div className="grid md:grid-cols-[1fr_auto_1fr] gap-12 items-center">
             <div className="text-sm font-mono text-foreground/60 leading-relaxed lowercase">
                whether it’s architecting an e-commerce platform like <a href="https://epanda-ecommerce.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 decoration-accent/30 hover:text-accent transition-colors">epanda</a> or a p2p marketplace like <a href="https://oxpecker.pro.bd/" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 decoration-accent/30 hover:text-accent transition-colors">oxpecker</a>, my focus is always on delivering scalable and measurable impact through clean code.
             </div>
             <div className="w-px h-24 bg-white/5 hidden md:block"></div>
             <div className="text-sm font-mono text-foreground/60 leading-relaxed lowercase">
               i am currently seeking opportunities to collaborate with startups and tech-forward companies to build the next generation of high-performance web solutions.
             </div>
           </div>
        </div>

        {/* Call to Action Matrix - High Interactivity */}
        <section className="mb-24">
          <div className="flex flex-col items-center mb-10 text-center">
            <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-2 opacity-60 animate-pulse">
              // READY_FOR_UPLINK
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter text-white">
              Connect <span className="text-accent underline decoration-accent/20 underline-offset-8">Directly</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* LinkedIn Uplink */}
            <a 
              href="https://www.linkedin.com/in/dev-s-hasan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-8 border border-white/5 bg-white/2 cyber-chamfer-sm transition-all duration-500 hover:border-[#0077B5]/50 hover:bg-[#0077B5]/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0077B5]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center cyber-chamfer-xs mb-6 group-hover:bg-[#0077B5] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-lg group-hover:shadow-[#0077B5]/20">
                  <FaLinkedinIn className="text-2xl" />
                </div>
                <span className="text-[10px] font-mono text-[#0077B5] font-black uppercase tracking-[0.3em] mb-1">Professional_ID</span>
                <h4 className="text-lg font-heading font-black text-white uppercase tracking-tight">LinkedIn_Profile</h4>
                <div className="mt-4 w-6 h-0.5 bg-white/10 group-hover:w-16 group-hover:bg-[#0077B5] transition-all duration-500"></div>
              </div>
            </a>

            {/* Email / Gmail Uplink */}
            <div 
              onClick={() => {
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=s.m.hasan4599@gmail.com&su=Project%20Inquiry%20from%20Portfolio&body=Hello%20S.M.%20Hasan,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`;
                window.open(gmailUrl, '_blank');
              }}
              className="group relative p-8 border border-white/5 bg-white/2 cyber-chamfer-sm transition-all duration-500 hover:border-accent/50 hover:bg-accent/5 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center cyber-chamfer-xs mb-6 group-hover:bg-accent group-hover:text-black group-hover:border-transparent transition-all duration-500 shadow-lg group-hover:shadow-accent/20">
                  <FaEnvelope className="text-2xl" />
                </div>
                <span className="text-[10px] font-mono text-accent font-black uppercase tracking-[0.3em] mb-1">Direct_Inquiry</span>
                <h4 className="text-lg font-heading font-black text-white uppercase tracking-tight">Send Email</h4>
                <div className="mt-4 w-6 h-0.5 bg-white/10 group-hover:w-16 group-hover:bg-accent transition-all duration-500"></div>
              </div>
            </div>

            {/* GitHub Source Uplink */}
            <a 
              href="https://github.com/coderguy47" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-8 border border-white/5 bg-white/2 cyber-chamfer-sm transition-all duration-500 hover:border-white/40 hover:bg-white/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center cyber-chamfer-xs mb-6 group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-500 shadow-lg group-hover:shadow-white/10">
                  <FaGithub className="text-2xl" />
                </div>
                <span className="text-[10px] font-mono text-white/40 font-black uppercase tracking-[0.3em] mb-1">Source_Code</span>
                <h4 className="text-lg font-heading font-black text-white uppercase tracking-tight">GitHub_Profile</h4>
                <div className="mt-4 w-6 h-0.5 bg-white/10 group-hover:w-16 group-hover:bg-white transition-all duration-500"></div>
              </div>
            </a>
          </div>
        </section>
      </div>
      
      {/* Decorative HUD Details */}
      <div className="fixed top-12 right-12 font-mono text-[8px] text-white/10 uppercase tracking-[0.5em] vertical-text hidden xl:block">
         IDENTITY_SUBSTRATE_VER_2.4
      </div>
    </div>
  );
};

export default AboutMe;
