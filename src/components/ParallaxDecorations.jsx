import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const CosmicCircle = ({ top, left, size = "400px", speed = 1 }) => {
  const { scrollY } = useScroll();
  const springScroll = useSpring(scrollY, { damping: 50, stiffness: 200 });

  const y = useTransform(springScroll, (value) => value * (speed * 0.15));
  const rotate = useTransform(springScroll, [0, 10000], [0, 360 * speed]);
  const opacity = useTransform(scrollY, [200, 600, 9000], [0, 0.6, 0.6]);

  return (
    <motion.div
      style={{
        top,
        left,
        width: size,
        height: size,
        y,
        rotate,
        opacity,
      }}
      className="absolute pointer-events-none flex items-center justify-center -z-10"
    >
      {/* 🔮 FIGMA UI/UX DESIGNER TOUCH: HIGH-END LIGHT EFFECTS */}

      {/* Layer 1: Glassmorphism Ring with Infinite Sweep Flare */}
      <div className="absolute inset-0 border border-white/10 rounded-full backdrop-blur-[2px] shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] overflow-hidden">
        {/* The 'Light Sweep' Animation */}
        <div className="absolute inset-x-0 h-[2px] bg-linear-to-r from-transparent via-white/40 to-transparent top-1/2 -translate-y-1/2 animate-[sweep_4s_ease-in-out_infinite]"></div>
      </div>

      {/* Layer 2: Main Gradient Orbit with Flare */}
      <div className="absolute inset-[10%] border-2 border-primary-500/20 rounded-full animate-[spin_25s_linear_infinite]">
        {/* Glow point/flare on the orbit */}
        <div className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-primary-400 rounded-full blur-[2px] shadow-[0_0_20px_#a78bfa]"></div>
      </div>

      {/* Layer 3: Dashed Tech Ring */}
      <div className="absolute inset-[25%] border-2 border-dashed border-indigo-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

      {/* Layer 4: The 'Core' Radiant Light Source */}
      <div className="relative w-1/4 h-1/4 flex items-center justify-center">
        {/* Infinite Pulsing Nebula Glows */}
        <div className="absolute inset-[-120%] bg-primary-600/20 blur-[60px] rounded-full animate-[pulse-ring_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-[-60%] bg-indigo-500/15 blur-2xl rounded-full animate-[pulse-ring_3s_ease-in-out_infinite]"></div>

        {/* Central Pure White Flare */}
        <div className="w-5 h-5 bg-white rounded-full blur-[1px] shadow-[0_0_40px_#fff,0_0_80px_#8b5cf6]"></div>
      </div>

      {/* Layer 5: High-Speed Orbital Particles */}
      <div className="absolute w-[95%] h-[95%] animate-[spin_10s_linear_infinite]">
        <div className="absolute top-0 right-1/4 w-2 h-2 bg-primary-200 rounded-full shadow-[0_0_12px_#fff] blur-[0.5px]"></div>
      </div>

      {/* Layer 6: Deep Ethereal Depth Blur */}
      <div className="absolute -inset-[40%] bg-linear-to-br from-purple-600/10 to-indigo-600/10 blur-[130px] rounded-full -z-20 opacity-50"></div>
    </motion.div>
  );
};

const ParallaxDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 min-h-full">
      {/* 🎨 Figma-Inspired Distribution (8 Units Total) */}

      {/* Unit 1: About Section (Left) */}
      <CosmicCircle top="120vh" left="2%" size="550px" speed={0.4} />

      {/* Unit 2: Education Transition (Right) */}
      <CosmicCircle top="280vh" left="82%" size="420px" speed={1.1} />

      {/* Unit 3: Education/Experience Hub (Left) */}
      <CosmicCircle top="440vh" left="8%" size="600px" speed={0.7} />

      {/* Unit 4: Experience Focus (Right) */}
      <CosmicCircle top="600vh" left="85%" size="380px" speed={1.4} />

      {/* Unit 5: Skills Core (Left) */}
      <CosmicCircle top="760vh" left="4%" size="680px" speed={0.5} />

      {/* Unit 6: Portfolio Entrance (Right) */}
      <CosmicCircle top="920vh" left="78%" size="500px" speed={1.2} />

      {/* Unit 7: Portfolio Center (Left) */}
      <CosmicCircle top="1080vh" left="12%" size="450px" speed={0.8} />

      {/* Unit 8: Contact / Footer Area (Right) */}
      <CosmicCircle top="1240vh" left="75%" size="580px" speed={0.3} />
    </div>
  );
};

export default ParallaxDecorations;
