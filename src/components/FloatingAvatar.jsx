import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingAvatar = () => {
  const { scrollY } = useScroll();

  // Opacity: Invisible at top, fades in as we scroll past hero
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-100">
      {/* RELATIVELY FIXED IMAGE ON THE RIGHT */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 right-10 md:right-16 flex flex-col items-center"
      >
        <div className="relative group">
          {/* Subtle static glow for the image */}
          <div className="absolute inset-0 bg-primary-500/20 blur-2xl rounded-full scale-110"></div>

          {/* Smaller Profile Image in a modern frame */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl backdrop-blur-md bg-dark-surface/40 group-hover:scale-110 transition-transform duration-500 ring-4 ring-primary-500/20">
            <img
              src="/biopic.png"
              alt="Floating Avatar Display"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>

          {/* Minimal Label */}
          <div className="absolute -left-16 bottom-4 md:-left-20 bg-dark-bg/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/5 whitespace-nowrap">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">
              Available For Hire
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingAvatar;
