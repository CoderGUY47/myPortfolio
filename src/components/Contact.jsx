import React from 'react';

const Contact = () => {
  const [email, setEmail] = React.useState('');

  const handleSend = () => {
    const targetEmail = "s.m.hasan4599@gmail.com";
    const subject = email ? `Project Inquiry from ${email}` : "Project Inquiry";
    const body = "Hello S.M. Hasan, I would like to discuss a project with you.";
    
    // Direct Gmail Compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open in new tab
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-14 relative overflow-hidden bg-gray-900/30 selection:bg-accent selection:text-black border-t border-white/5">
      
      {/* Premium Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Radar Scanning Line Overlay */}
        <div className="absolute top-0 left-1/2 w-px h-[100px] bg-linear-to-b from-transparent to-accent -translate-x-1/2 opacity-20 animate-[scanline_4s_linear_infinite] pointer-events-none"></div>

        {/* Header HUD */}
        <div className="flex items-center gap-3 mb-6 opacity-60">
           <div className="w-8 h-px bg-accent"></div>
           <span className="text-accent font-mono text-[9px] tracking-[0.4em] uppercase font-bold animate-pulse">Communication_Link</span>
           <div className="w-8 h-px bg-accent"></div>
        </div>

        {/* Glitched Heading */}
        <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase text-white mb-8 cyber-glitch" 
            data-text="INITIATE_CONTACT">
          INITIATE_CONTACT
        </h2>

        <div className="p-6 border border-white/20 hover:border-accent/50 bg-white/5 cyber-chamfer-sm mb-16 inline-block backdrop-blur-md relative group transition-colors duration-500">
           {/* Targeting Corners */}
           <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-30 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-30 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-30 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent opacity-30 group-hover:opacity-100 transition-opacity"></div>
           </div>

           <p className="text-xs md:text-sm font-mono text-foreground/60 leading-relaxed tracking-wide uppercase">
             AVAILABLE FOR GLOBAL / REMOTE / PHYSICAL PROJECTS <br/>
             <span className="text-[10px] text-foreground/40 mt-2 block">SECURE_UPLINK:</span>
             <a href="mailto:s.m.hasan4599@gmail.com" className="text-accent hover:underline text-sm md:text-base font-bold bg-accent/10 px-4 py-1 mt-1 inline-block border border-accent/20 transition-all hover:bg-accent hover:text-black">
               s.m.hasan4599@gmail.com
             </a>
           </p>
        </div>

        {/* Input Bar - Technical Style */}
        <div className="w-full max-w-lg flex flex-col sm:flex-row items-stretch gap-4 relative">
          <div className="relative flex-1 w-full group">
            {/* Input Glow */}
            <div className="absolute inset-0 bg-accent/20 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent/60 animate-pulse rounded-full"></span>
              <span className="text-accent font-mono text-[10px]">&gt;</span>
            </div>
            
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER_SENDER_ADDRESS"
              className="w-full h-full bg-background/80 border border-white/10 p-4 pl-12 text-xs font-mono text-white placeholder:text-white/20 uppercase focus:outline-none focus:border-accent transition-all relative z-10"
            />
          </div>
          
          <button 
            onClick={handleSend}
            className="group relative w-full sm:w-auto px-12 py-4 bg-accent text-black font-heading font-black text-[12px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all cyber-chamfer-sm overflow-hidden btn-shine"
          >
            {/* Pulsing Glitch Layer */}
            <span className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              SEND <span className="animate-pulse opacity-50 block w-1.5 h-3 bg-black"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Side Framework Accents */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 opacity-20">
         <span className="text-[6px] font-mono [writing-mode:vertical-lr] tracking-[0.5em] rotate-180">SYNC_PORT_A</span>
         <div className="w-px h-32 bg-white/20"></div>
      </div>
      <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 opacity-20">
         <div className="w-px h-32 bg-white/20"></div>
         <span className="text-[6px] font-mono [writing-mode:vertical-lr] tracking-[0.5em]">SYNC_PORT_B</span>
      </div>
    </section>
  );
};

export default Contact;
