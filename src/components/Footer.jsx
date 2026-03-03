import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: "fa-brands fa-github", url: "#", label: "GitHub" },
    { icon: "fa-brands fa-linkedin", url: "#", label: "LinkedIn" },
    { icon: "fa-brands fa-twitter", url: "#", label: "X / Twitter" },
    { icon: "fa-brands fa-instagram", url: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative py-20 border-t border-white/5 bg-slate-950/40 backdrop-blur-3xl overflow-hidden">
      {/* 🧩 BACKGROUND DECOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary-500/30 to-transparent"></div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-[90%] md:w-[70%] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* 📡 SYSTEM STATUS BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
                Uplink: Active
              </span>
            </div>
            <div className="text-[9px] font-mono text-slate-500 leading-relaxed uppercase tracking-widest">
              System Frequency: 44.1 kHz <br />
              Signal Strength: 100% Secure
            </div>
          </motion.div>

          {/* 🔘 INTERACTIVE SOCIAL HUB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center items-center gap-4"
          >
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 glass flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-primary-500/20 hover:border-primary-500/50 transition-all duration-300 border border-white/5 shadow-lg group"
                aria-label={social.label}
              >
                <i
                  className={`${social.icon} text-lg group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]`}
                ></i>
              </motion.a>
            ))}
          </motion.div>

          {/* 🚀 ZENITH RETURN (BACK TO TOP) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center md:items-end gap-4"
          >
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-500"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary-400 transition-colors">
                Return to Zenith
              </span>
              <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                <i className="fa-solid fa-arrow-up text-xs text-primary-400 group-hover:text-white group-hover:-translate-y-0.5 transition-all"></i>
              </div>
            </button>
          </motion.div>
        </div>

        {/* 📄 LEGAL & FOOTER INFO */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest italic">
              © {new Date().getFullYear()} // S.M.HASAN // DIGITAL INTERFACE
            </p>
            <span className="text-[7px] font-mono text-slate-700 uppercase">
              Terminal ID:{" "}
              {Math.random().toString(36).substring(7).toUpperCase()}
            </span>
          </div>

          <div className="flex space-x-8 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
            {["Identity", "Compliance", "Protocol"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-primary-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
