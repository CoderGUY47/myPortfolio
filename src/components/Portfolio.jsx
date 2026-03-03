import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ProjectCard = ({ project, index, currIndex, width, height }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isActive = index === currIndex;
  const cardOffset = isActive ? 0 : index % 2 === 0 ? 30 : -30;

  return (
    <motion.div
      className={`carousel__slider__item shrink-0 ${isActive ? "carousel__slider__item--active" : ""}`}
      animate={{ y: cardOffset }}
      style={{
        width: `${width - 40}px`,
        height: `${height}px`,
      }}
    >
      <div className="item__3d-frame group/frame transition-all duration-500 h-full px-[10px]">
        <div
          onClick={() =>
            window.open(project.homepage, "_blank", "noopener,noreferrer")
          }
          className="item__3d-frame__box item__3d-frame__box--front group overflow-hidden bg-slate-900/40 relative flex flex-col cursor-pointer h-full border border-white/5 hover:border-primary-500/30 transition-all rounded-2xl hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]"
        >
          {/* CORNER HUD BRACKETS */}
          <div className="absolute inset-4 z-30 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary-500/50 group-hover:w-6 group-hover:h-6 group-hover:border-primary-400 transition-all duration-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary-500/50 group-hover:w-6 group-hover:h-6 group-hover:border-primary-400 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary-500/50 group-hover:w-6 group-hover:h-6 group-hover:border-primary-400 transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary-500/50 group-hover:w-6 group-hover:h-6 group-hover:border-primary-400 transition-all duration-500" />
          </div>

          {/* 🛸 HUD SCANNING OVERLAY */}
          <motion.div
            animate={{ y: [-100, 500], opacity: [0, 0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-20 bg-linear-to-b from-transparent via-primary-500/20 to-transparent z-20 pointer-events-none"
          />

          {/* 🦴 HIGH-TECH SKELETON LOADER (Synced with User Sample) */}
          <motion.div
            animate={{ opacity: imageLoaded ? 0 : 1 }}
            className="absolute inset-0 z-50 bg-slate-900 flex flex-col overflow-hidden pointer-events-none transition-opacity duration-500"
          >
            {/* Image Placeholder */}
            <div className="relative h-48 mx-4 mt-4 bg-white/5 rounded-xl flex items-center justify-center animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-10 h-10 text-white/10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>

            {/* Content Placeholder */}
            <div className="p-6 space-y-4 animate-pulse">
              <div className="h-3 w-32 bg-primary-500/20 rounded-full"></div>
              <div className="h-5 w-48 bg-white/10 rounded-lg"></div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/5 rounded-full"></div>
                <div className="h-2 w-full bg-white/5 rounded-full"></div>
                <div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
              </div>
            </div>

            {/* Shimmer Scan Line */}
            <motion.div
              animate={{ y: ["-100%", "400%"], opacity: [0, 0.4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-1 bg-linear-to-r from-transparent via-primary-500 to-transparent z-10"
            />
          </motion.div>

          {/* 🌀 BLURRED BACKDROP */}
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-30 blur-2xl scale-125 transition-transform duration-1000 group-hover:scale-150"
          />

          {/* 🖼️ MAIN IMAGE */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-700 z-10"
            onLoad={(e) => {
              e.currentTarget.style.opacity = "1";
              setImageLoaded(true);
            }}
          />

          {/* Technical Readout Overlay */}
          <div className="absolute top-6 left-6 z-20 flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-ping"></span>
              <span className="text-[7px] font-black font-mono text-primary-400 uppercase tracking-widest">
                Signal ID:{" "}
                {Math.random().toString(36).substring(7).toUpperCase()}
              </span>
            </div>
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-dark-bg/95 via-dark-bg/40 to-transparent z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-20 text-center p-6 mt-auto border-t border-white/5 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-primary-400 font-bold text-[8px] uppercase tracking-[0.2em] bg-primary-950/40 px-2 py-0.5 rounded border border-primary-500/20">
                {project.category}
              </span>
            </div>
            <h3 className="text-base font-black text-white group-hover:text-primary-400 transition-colors uppercase tracking-tight">
              {project.title}
            </h3>
            <div className="flex items-center justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(
                    project.homepage,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
                className="text-[9px] font-black uppercase tracking-widest text-primary-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10"
              >
                Live Site
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.link, "_blank", "noopener,noreferrer");
                }}
                className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  const localProjects = [
    {
      title: "E-Commerce",
      category: "Web App",
      image: "/project1.png",
      link: "#",
    },
    {
      title: "Fintech UI",
      category: "Mobile App",
      image: "/project2.png",
      link: "#",
    },
    {
      title: "Crypto App",
      category: "Web3",
      image: "/project1.png",
      link: "#",
    },
    {
      title: "Social Media",
      category: "Web App",
      image: "/project2.png",
      link: "#",
    },
    {
      title: "Dashboard",
      category: "Admin",
      image: "/project1.png",
      link: "#",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const fetchRepos = async () => {
      const CACHE_KEY = "github_repos_cache";
      const CACHE_TIME_KEY = "github_repos_cache_time";
      const ONE_DAY = 24 * 60 * 60 * 1000;

      const cachedData = localStorage.getItem(CACHE_KEY);
      const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
      const now = Date.now();
      const MIN_LOADING_TIME = 4000; // 4s to ensure skeleton visibility

      if (cachedData && cachedTime && now - cachedTime < ONE_DAY) {
        setProjects(JSON.parse(cachedData));
        setTimeout(() => setLoading(false), MIN_LOADING_TIME);
        return;
      }

      const startFetchTime = Date.now();
      try {
        const response = await fetch(
          "https://api.github.com/users/CoderGUY47/repos?sort=updated&per_page=100",
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          const liveRepos = data.filter(
            (repo) =>
              repo.name !== "myPortfolio" &&
              repo.homepage &&
              repo.homepage.includes("coderguy47.github.io"),
          );

          const formattedRepos = liveRepos.map((repo) => ({
            title: repo.name.replace(/[-_]/g, " "),
            category: repo.language || "Live Site",
            image: `https://api.microlink.io/?url=${encodeURIComponent(repo.homepage)}&screenshot=true&embed=screenshot.url&meta=false&overlay.browser=dark`,
            link: repo.html_url,
            homepage: repo.homepage,
            description: repo.description,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
          }));

          if (formattedRepos.length > 0) {
            setProjects(formattedRepos);
            localStorage.setItem(CACHE_KEY, JSON.stringify(formattedRepos));
            localStorage.setItem(CACHE_TIME_KEY, now.toString());
          }
        }

        const elapsedTime = Date.now() - startFetchTime;
        const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);
        setTimeout(() => setLoading(false), remainingTime);
      } catch (error) {
        console.error("GitHub fetch failed:", error);
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const displayProjects = projects.length > 0 ? projects : localProjects;
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(displayProjects.map((p) => p.category)),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? displayProjects
      : displayProjects.filter((p) => p.category === activeFilter);
  const currentProjects =
    filteredProjects.length > 0 ? filteredProjects : displayProjects;

  const extendedProjects = [
    currentProjects[currentProjects.length - 2] || currentProjects[0],
    currentProjects[currentProjects.length - 1] || currentProjects[0],
    ...currentProjects,
    currentProjects[0],
    currentProjects[1] || currentProjects[0],
  ];

  const [currIndex, setCurrIndex] = useState(2);
  useEffect(() => setCurrIndex(2), [activeFilter]);

  const [isTransitioning, setIsTransitioning] = useState(true);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.max(window.innerWidth * 0.25, 275));
      setHeight(Math.max(window.innerHeight * 0.5, 400));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    const interval = setInterval(() => move(currIndex + 1), 4000);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [currIndex, currentProjects]);

  const move = (index) => {
    setIsTransitioning(true);
    setCurrIndex(index);
  };

  const handleTransitionEnd = () => {
    if (currIndex >= extendedProjects.length - 2) {
      setIsTransitioning(false);
      setCurrIndex(2);
    } else if (currIndex <= 1) {
      setIsTransitioning(false);
      setCurrIndex(extendedProjects.length - 3);
    }
  };

  const translateX =
    width > 0 ? currIndex * -width - width / 2 + window.innerWidth / 2 : 0;

  if (loading)
    return (
      <section className="py-24 bg-dark-bg/50 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="w-[90%] md:w-[70%] mx-auto px-6 relative z-10">
          {/* Skeleton Header */}
          <div className="text-center mb-16 animate-pulse">
            <div className="h-4 w-32 bg-white/10 mx-auto rounded-full mb-6"></div>
            <div className="h-12 w-64 bg-white/10 mx-auto rounded-xl"></div>
          </div>

          {/* Skeleton Filter Bar */}
          <div className="flex justify-center gap-4 mb-20 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-24 bg-white/10 rounded-full"></div>
            ))}
          </div>

          {/* Skeleton Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative flex flex-col glass border border-white/5 rounded-2xl animate-pulse overflow-hidden h-[450px] bg-slate-900/40"
              >
                {/* Image Placeholder */}
                <div className="relative h-56 mx-4 mt-4 overflow-hidden bg-white/5 rounded-xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    className="w-12 h-12 text-white/5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                {/* Content Placeholder */}
                <div className="p-6 flex flex-col h-full mt-auto">
                  <div className="h-3 w-20 bg-primary-500/10 rounded-full mb-4"></div>
                  <div className="h-5 w-48 bg-white/5 rounded-lg mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-white/5 rounded-full"></div>
                    <div className="h-2 w-full bg-white/5 rounded-full"></div>
                    <div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
                  </div>
                  {/* Button Placeholder */}
                  <div className="mt-auto flex gap-4 pt-8 pb-4">
                    <div className="h-9 w-24 bg-white/5 rounded-full"></div>
                    <div className="h-9 w-16 bg-white/5 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="py-24 relative bg-dark-bg overflow-hidden"
    >
      {/* 🎬 CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-50"></div>

      {/* 🧬 DATA STREAM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -500, x: `${i * 10}%` }}
            animate={{ y: 1000 }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
            className="absolute top-0 w-px h-64 bg-linear-to-b from-transparent via-primary-500/20 to-transparent"
          />
        ))}
      </div>

      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-600/10 blur-[180px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="w-full relative z-10">
        <motion.div style={{ y: headerY }} className="text-center mb-10 px-6">
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-primary-500 font-mono text-[8px] uppercase tracking-[0.5em] font-black opacity-60">
              Accessing Protocol: 0x47_SYNC
            </span>
            <span className="text-primary-400 font-black tracking-widest text-xs uppercase bg-primary-950/30 px-4 py-1.5 rounded-full border border-primary-500/20 inline-flex items-center justify-center gap-2 mx-auto w-fit">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Sync System
            </span>
          </div>
          <h2 className="text-6xl font-black mb-4 uppercase tracking-tighter leading-none">
            Project <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic font-mono text-[10px] uppercase tracking-widest border-l border-white/10 pl-4">
            Live Architectures // Signal Locked
          </p>
        </motion.div>

        <div className="flex flex-col items-center mb-16 px-6">
          {/* 📡 SYSTEM STATUS READOUT */}
          <div className="flex items-center gap-8 px-8 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md mb-12 font-mono text-[10px] uppercase tracking-widest text-slate-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-ping" />
              <span className="text-slate-300">Network Status:</span>
              <span className="text-primary-400 font-black">Synced</span>
            </div>

            <div className="w-px h-4 bg-white/10" />

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-database text-slate-600" />
              <span className="text-slate-300">Nodes Active:</span>
              <span className="text-primary-400 font-black">
                {displayProjects.length}
              </span>
            </div>

            <div className="w-px h-4 bg-white/10" />

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-shield-halved text-slate-600" />
              <span className="text-primary-400 font-black">Secure</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`group relative px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all overflow-hidden ${
                  activeFilter === cat
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeFilter === cat
                      ? "bg-primary-600 opacity-100"
                      : "bg-white/5 opacity-0 group-hover:opacity-100"
                  }`}
                />
                <span className="relative z-10">{cat}</span>
                {activeFilter === cat && (
                  <motion.div
                    layoutId="filter-glow"
                    className="absolute inset-0 bg-primary-400 blur-xl opacity-20 pointer-events-none"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="carousel relative">
          <div className="carousel__body overflow-visible">
            <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex space-x-12 z-20">
              <button
                onClick={() => move(currIndex - 1)}
                className="text-4xl hover:scale-125 transition-transform text-primary-400 drop-shadow-lg cursor-pointer"
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button
                onClick={() => move(currIndex + 1)}
                className="text-4xl hover:scale-125 transition-transform text-primary-400 drop-shadow-lg cursor-pointer"
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>

            <div
              className="carousel__slider"
              onTransitionEnd={handleTransitionEnd}
              style={{
                width: `${width * extendedProjects.length}px`,
                transform: `translate3d(${translateX}px, 0, 0)`,
                transition: isTransitioning
                  ? "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none",
                display: "flex",
              }}
            >
              {extendedProjects.map((project, index) => (
                <ProjectCard
                  key={`${activeFilter}-${index}`}
                  project={project}
                  index={index}
                  currIndex={currIndex}
                  width={width}
                  height={height}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <a
            href="https://github.com/CoderGUY47"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-12 py-5 glass rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3 text-white">
              Explore All Repositories{" "}
              <i className="fa-brands fa-github text-xl"></i>
            </span>
            <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
