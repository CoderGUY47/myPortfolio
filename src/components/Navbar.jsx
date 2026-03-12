import React from "react";

const Navbar = () => {
  const links = [
    { name: "ARCHIVE", href: "#work", code: "01" },
    { name: "ACADEMIC", href: "#education", code: "02" },
    { name: "CONTACT", href: "#contact", code: "03" },
  ];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full md:w-[65%] z-50 px-6 py-4 flex items-center justify-between border-b border-white/5 bg-background/60 backdrop-blur-2xl">
      <div className="flex items-center gap-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-10 h-10 border border-accent flex items-center justify-center cyber-chamfer-sm group cursor-pointer hover:neon-glow bg-background/50 transition-all relative z-10">
            <span className="text-accent font-black text-xl group-hover:animate-pulse">
              H
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center gap-2 mb-0.5">
            <h2 className="text-[11px] font-heading font-black tracking-widest uppercase text-white">
              S.M.HASAN
            </h2>
            <div className="px-1.5 py-0.5 border border-accent/20 bg-accent/5 rounded-full flex items-center gap-1">
              <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
              <span className="text-[6px] font-mono text-accent font-bold uppercase tracking-widest">
                Live_Online
              </span>
            </div>
          </div>
          <span className="text-[9px] font-mono text-foreground/40 tracking-[0.4em] block uppercase">
            AI_Driven_Frontend_Lead
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`
              px-5 py-2 flex flex-col items-start cyber-chamfer-sm transition-all relative group overflow-hidden
              ${link.active ? "bg-accent/10 border-l-2 border-accent text-accent" : "border border-transparent text-foreground/40 hover:text-foreground hover:bg-white/5"}
            `}
          >
            {/* Animated Hover Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-accent/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="text-[7px] font-mono mb-0.5 text-accent/40 group-hover:text-accent transition-colors">
              [{link.code}]
            </span>
            <span className="text-[9px] font-heading font-bold tracking-[0.2em]">
              {link.name}
            </span>
          </a>
        ))}
        <a
          href="#contact"
          className="hidden sm:flex px-5 py-2 flex-col items-start cyber-chamfer-sm transition-all relative group overflow-hidden bg-accent/10 border-l-2 border-accent text-accent ml-2"
        >
          {/* Animated Hover Background */}
          <div className="absolute top-0 left-0 w-full h-px bg-accent/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <span className="text-[7px] font-mono mb-0.5 text-accent/40 group-hover:text-accent transition-colors">
            [04]
          </span>
          <span className="text-[9px] font-heading font-bold tracking-[0.2em]">
            HIRE_ME
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
