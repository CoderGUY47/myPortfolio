import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getLinkHref = (href) => {
    if (href.startsWith("#") && !isHome) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <footer className="py-12 mt-24 border-t border-white/5 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start group cursor-default">
          <Link to="/" className="text-xl font-heading font-black tracking-widest uppercase text-white group-hover:text-accent transition-colors">
            S.M.HASAN
          </Link>
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] mt-1">
            Frontend Engineer
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-mono tracking-[0.2em] text-foreground/50 uppercase">
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <a href={getLinkHref("#projects")} className="hover:text-accent transition-colors">Projects</a>
          <a href={getLinkHref("#experience")} className="hover:text-accent transition-colors">Experience</a>
          <a href={getLinkHref("#education")} className="hover:text-accent transition-colors">Academic</a>
        </div>

        {/* Copyright */}
        <div className="text-[9px] font-mono text-white/30 tracking-[0.2em] uppercase flex items-center gap-2">
           <span className="text-accent">©</span> {currentYear} ALL RIGHTS RESERVED
        </div>

      </div>
    </footer>
  );
};

export default Footer;
