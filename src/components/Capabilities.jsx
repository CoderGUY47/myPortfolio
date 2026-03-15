import React, { useState } from "react";
import {
  FaReact,
  FaPaintBrush,
  FaMagic,
  FaDatabase,
  FaRocket,
  FaSearch,
} from "react-icons/fa";

const ServiceCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative p-6 md:p-10 bg-gray-900/20 border border-accent md:border-white/15 cyber-chamfer-sm transition-all duration-700 lg:hover:border-accent/40 lg:hover:bg-card/40 flex flex-col items-center text-center overflow-hidden h-full">
      {/*this green dots move around when i touch*/}
      <div
        className="absolute inset-0 opacity-5 md:opacity-0 lg:group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #00ff88 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      ></div>

      {/*this little code tells me which part this is*/}
      <div className="absolute top-2 left-2 md:top-4 md:left-4 text-[6px] md:text-[7px] font-mono text-accent md:text-white/10 lg:group-hover:text-accent transition-colors">
        {item.id}
      </div>

      {/*this box holds the pictures i like*/}
      <div className="relative mb-4 md:mb-8">
        <div className="absolute inset-0 bg-accent/20 blur-xl md:opacity-0 lg:group-hover:opacity-100 transition-opacity"></div>
        <div className="w-12 h-12 md:w-16 md:h-16 border border-accent md:border-white/10 flex items-center justify-center text-xl md:text-2xl text-accent md:text-foreground/20 lg:group-hover:text-accent lg:group-hover:border-accent lg:group-hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] bg-background/50 transition-all duration-500 relative z-10">
          {item.icon}
        </div>
      </div>

      {/*what this part of my work is called*/}
      <h3 className="text-[10px] md:text-sm font-heading font-black text-white lg:group-hover:text-accent transition-colors tracking-[0.2em] uppercase mb-3 md:mb-4">
        {item.title}
      </h3>

      {/*i pulse to show that i am working hard*/}
      <div className="flex items-center gap-2 px-2 py-0.5 md:px-3 md:py-1 bg-white/5 border border-white/10 rounded-full md:opacity-40 lg:group-hover:opacity-100 transition-opacity mb-4">
        <span className="w-1 h-1 rounded-full bg-accent animate-pulse"></span>
        <span className="text-[6px] md:text-[7px] font-mono text-white tracking-widest uppercase">
          {item.status}
        </span>
      </div>

      {/*more words about what i do for you*/}
      <div className="flex flex-col items-center">
        <p className={`text-[8px] md:text-xs font-mono text-white/60 lg:group-hover:text-accent transition-all duration-300 tracking-[0.2em] uppercase mb-2 ${!isExpanded ? 'line-clamp-2 md:line-clamp-none' : 'line-clamp-none'}`}>
          {item.description}
        </p>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="md:hidden text-[7px] font-mono text-accent uppercase font-bold tracking-[0.2em] hover:text-white transition-colors py-1"
        >
          {isExpanded ? "[ SHOW_LESS ]" : "[ SHOW_MORE ]"}
        </button>
      </div>

      {/*this line at the bottom looks very neat*/}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent/20 md:via-white/5 to-transparent lg:group-hover:via-accent/40 transition-all duration-700"></div>
    </div>
  );
};

const Capabilities = () => {
  const services = [
    {
      icon: <FaReact />,
      title: "Custom React Web Apps",
      description: "Developing highly interactive, component-based single-page applications (SPAs) focused on speed and scalability.",
      status: "Active & Ready", 
      id: "PHASE_01",
    },
    {
      icon: <FaPaintBrush />,
      title: "Modern UI/UX",
      description: "Transforming Figma designs into pixel-perfect React components using Tailwind CSS and Shadcn UI",
      status: "High-Demand",
      id: "PHASE_02",
    },
    {
      icon: <FaMagic />,
      title: "Interactive Design",
      description: "Enhancing user retention with high-end, scroll-triggered animations and transitions using Framer Motion.", 
      status: "Premium-Tier",
      id: "PHASE_03",
    },
    {
      icon: <FaDatabase />,
      title: "API & Data Integration",
      description: "Connecting React frontends to RESTful APIs and external data sources for real-time, dynamic content updates.",
      status: "Strategic Level",
      id: "PHASE_04",
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description: "Identifying and fixing bottlenecks (re-renders, large bundles) to ensure your app stays under the 0.05s attention threshold.",
      status: "Intermediate Service",
      id: "PHASE_05",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "Building lightning-fast websites with Server-Side Rendering (SSR) to achieve 95+ Lighthouse and SEO scores.",
      status: "Core Offering",
      id: "PHASE_06",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/*top part of this page makes me feel ready*/}
      <div className="flex flex-col items-center mb-16 text-center px-6">
        <div className="flex items-center gap-3 mb-4 opacity-50">
          <div className="w-8 h-px bg-accent"></div>
          <span className="text-[8px] font-mono tracking-[0.4em] text-accent uppercase font-bold">
            Client_Solutions_Protocol
          </span>
          <div className="w-8 h-px bg-accent"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tighter mb-4">
          SERVICES
        </h2>

        {/*this line is like a shining road*/}
        <div className="flex items-center justify-center w-full max-w-md mb-8 opacity-90">
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent/20 relative overflow-hidden rotate-180 cyber-chamfer">
            <div className="absolute inset-0 w-[200%] bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_2s_ease-in-out_infinite]"></div>
          </div>
          <div className="mx-4 flex items-center gap-2">
            <div className="w-1 h-3 bg-accent/50 -skew-x-12"></div>
            <div className="relative w-3 h-3 flex items-center justify-center border border-accent rotate-45 shadow-neon">
              <div className="absolute w-1.5 h-1.5 bg-accent animate-ping"></div>
              <div className="w-1 h-1 bg-accent relative z-10"></div>
            </div>
            <div className="w-1 h-3 bg-accent/50 skew-x-12"></div>
          </div>
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-accent/20 relative overflow-hidden cyber-chamfer">
            <div className="absolute inset-0 w-[200%] bg-linear-to-r from-transparent via-accent to-transparent animate-[sweep_2s_ease-in-out_infinite]"></div>
          </div>
        </div>

        <div className="max-w-xl text-xs font-mono text-white/80 uppercase tracking-widest leading-relaxed">
          Engineering Scalable Substrates for High-Fidelity Digital Ecosystems.{" "}
          <br />
          Verified_Engineering_Solutions // Ready_for_Deployment.
        </div>
      </div>

      {/*all my skills are in this big box*/}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 px-4 md:px-0 auto-rows-fr">
        {services.map((item, i) => (
          <ServiceCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
