import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  const links = [
    { name: "Home", href: "/", code: "00", isRoute: true },
    { name: "About", href: "/about", code: "01", isRoute: true },
    { name: "Projects", href: "#projects", code: "02" },
    { name: "Feedback", href: "/feedback", code: "03", isRoute: true },
  ];

  const getLinkHref = (href) => {
    if (href.startsWith("#") && !isHome) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <>
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full md:w-[65%] z-100 px-6 py-4 flex items-center justify-between border-b border-accent/20 bg-background/60 backdrop-blur-2xl transition-all">
        <div className="flex items-center gap-6 mt-2 md:mt-4">
          <Link to="/" className="relative group">
            <div className="absolute inset-0 bg-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 flex items-center justify-center relative group cursor-pointer transition-all duration-500 hover:scale-110">
              {/*this logo makes me feel so proud and happy*/}
              <div className="relative w-9 h-9 flex items-center justify-center">
                {/*i hope this green circle spins like my dreams*/}
                <div className="absolute inset-0 border-[3px] border-transparent border-t-accent border-r-accent/30 rounded-full animate-[spin_4s_linear_infinite] shadow-[0_0_15px_rgba(0,255,136,0.5)]"></div>
                {/*this pink color is very beautiful and bright*/}
                <div className="absolute inset-[5px] border-[3px] border-transparent border-b-accent/50 border-l-accent/50 rounded-full animate-[spin_2.5s_linear_infinite_reverse] shadow-[0_0_15px_rgba(255,0,255,0.4)]"></div>
                {/*blue color makes me think of the sky*/}
                <div className="absolute inset-[10px] border-[3px] border-transparent border-t-accent/20 border-r-accent/20 rounded-full animate-[spin_1.5s_linear_infinite] shadow-[0_0_15px_rgba(0,212,255,0.6)]"></div>
                {/*this little dot is the heart of my work*/}
                <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)] animate-pulse"></div>
              </div>
            </div>
          </Link>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2 mb-0.5">
              <h2 className="text-[11px] font-heading font-black tracking-widest uppercase text-white">
                S.M.HASAN
              </h2>
              <div className="px-1.5 py-0.5 border border-accent/20 bg-accent/5 rounded-full flex items-center gap-1">
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
                <span className="text-[9px] font-mono text-accent font-bold uppercase tracking-widest">
                  Live_Online
                </span>
              </div>
            </div>
            <span className="text-[9px] font-mono text-foreground/40 tracking-[0.4em] block uppercase">
              AI_Driven_Frontend_Web_Developer
            </span>
          </div>
        </div>

        {/*these buttons help people find where to go*/}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="px-5 py-2 flex flex-col items-start cyber-chamfer-sm transition-all relative group overflow-hidden border border-transparent text-foreground/40 hover:text-foreground hover:bg-white/5"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-accent/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="text-[10px] font-mono mb-0.5 text-accent/80 group-hover:text-accent transition-colors">
                  [{link.code}]
                </span>
                <span className="text-[12px] text-white/70 font-heading font-bold tracking-[0.2em]">
                  {link.name}
                </span>
              </Link>
            ) : (
              <a
                key={link.name}
                href={getLinkHref(link.href)}
                className="px-5 py-2 flex flex-col items-start cyber-chamfer-sm transition-all relative group overflow-hidden border border-transparent text-foreground/40 hover:text-foreground hover:bg-white/5"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-accent/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="text-[10px] font-mono mb-0.5 text-accent/80 group-hover:text-accent transition-colors">
                  [{link.code}]
                </span>
                <span className="text-[12px] text-white/70 font-heading font-bold tracking-[0.2em]">
                  {link.name}
                </span>
              </a>
            )
          ))}
          <a
            href={isHome ? "#contact" : "/#contact"}
            className="flex px-5 py-2 flex-col items-start cyber-chamfer-sm transition-all relative group overflow-hidden bg-accent/10 border-l-2 border-accent text-accent ml-2"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-accent/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="text-[7px] font-mono mb-0.5 text-accent/40 group-hover:text-accent transition-colors">
              [05]
            </span>
            <span className="text-[9px] font-heading font-bold tracking-[0.2em]">
              HIRE_ME
            </span>
          </a>
        </div>

        {/*buttons for phones so everyone can see*/}
        <div className="flex md:hidden items-center gap-4">
          <a
            href={isHome ? "#contact" : "/#contact"}
            className="px-4 py-2 bg-accent/10 border-l-2 border-accent text-accent cyber-chamfer-sm text-[10px] font-heading font-bold tracking-widest"
          >
            HIRE_ME
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-accent text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/*this menu hides and shows like a secret*/}
      <div className={`fixed inset-0 z-90 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-heading font-black text-white hover:text-accent transition-colors tracking-[0.3em] uppercase"
              >
                <span className="text-accent/40 mr-4 font-mono text-sm">[{link.code}]</span>
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={getLinkHref(link.href)}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-heading font-black text-white hover:text-accent transition-colors tracking-[0.3em] uppercase"
              >
                <span className="text-accent/40 mr-4 font-mono text-sm">[{link.code}]</span>
                {link.name}
              </a>
            )
          ))}
          <a
            href={isHome ? "#contact" : "/#contact"}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-heading font-black text-accent hover:text-white transition-colors tracking-[0.3em] uppercase mt-4 px-6 py-2 border border-accent/20 bg-accent/5 cyber-chamfer-sm"
          >
             HIRE_ME
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
