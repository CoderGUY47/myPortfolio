import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  // Pre-calculate header parallax
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // GitHub Data Fetching (Live Site Screenshot Engine)
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/CoderGUY47/repos?sort=updated&per_page=100",
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          // ⚡ FILTER: Only projects with a live GitHub Pages link
          const liveRepos = data.filter(
            (repo) =>
              repo.name !== "myPortfolio" &&
              repo.homepage &&
              repo.homepage.includes("coderguy47.github.io"),
          );

          const formattedRepos = liveRepos.map((repo) => {
            // 📡 MICROLINK SCREENSHOT ENGINE: Captures the real website design
            const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(repo.homepage)}&screenshot=true&embed=screenshot.url&meta=false&overlay.browser=dark`;

            return {
              title: repo.name.replace(/[-_]/g, " "),
              category: repo.language || "Live Site",
              image: screenshotUrl,
              link: repo.html_url,
              homepage: repo.homepage,
              description: repo.description,
            };
          });

          if (formattedRepos.length > 0) {
            setProjects(formattedRepos);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("GitHub fetch failed:", error);
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const displayProjects = projects.length > 0 ? projects : localProjects;

  // Cloned array for infinite effect
  const extendedProjects = [
    displayProjects[displayProjects.length - 2] || displayProjects[0],
    displayProjects[displayProjects.length - 1] || displayProjects[0],
    ...displayProjects,
    displayProjects[0],
    displayProjects[1] || displayProjects[0],
  ];

  const [currIndex, setCurrIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(450);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = Math.max(window.innerWidth * 0.25, 275);
      const newHeight = Math.max(window.innerHeight * 0.5, 400);
      setWidth(newWidth);
      setHeight(newHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [currIndex, displayProjects]);

  const move = (index) => {
    setIsTransitioning(true);
    setCurrIndex(index);
  };

  const next = () => move(currIndex + 1);
  const prev = () => move(currIndex - 1);

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
      <section className="py-24 bg-dark-bg/50">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-500 font-black uppercase tracking-widest text-[10px]">
            Synchronizing Signal...
          </p>
        </div>
      </section>
    );

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="py-24 relative bg-dark-bg/50 overflow-hidden"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-600/5 blur-[150px] rounded-full pointer-events-none"
      ></motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"
      ></motion.div>

      <div className="w-full relative z-10">
        <motion.div style={{ y: headerY }} className="text-center mb-16 px-6">
          <span className="text-primary-400 font-black tracking-widest text-xs uppercase bg-primary-950/30 px-4 py-1.5 rounded-full border border-primary-500/20 mb-4 inline-flex items-center justify-center gap-2 mx-auto w-fit">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Sync System
          </span>
          <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto italic border-l-2 border-indigo-500/50 pl-4 py-1">
            Live synchronization with GitHub architectures.
          </p>
        </motion.div>

        <div className="carousel relative">
          <div className="carousel__body overflow-visible">
            {/* Navigation Buttons */}
            <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex space-x-12 z-20">
              <button
                onClick={prev}
                className="text-4xl hover:scale-125 transition-transform text-primary-400 drop-shadow-lg cursor-pointer"
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button
                onClick={next}
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
              {extendedProjects.map((project, index) => {
                const isActive = index === currIndex;
                const rotation = isActive ? 0 : index < currIndex ? 25 : -25;
                // Avoid useTransform in loop
                const cardOffset = isActive ? 0 : index % 2 === 0 ? 30 : -30;

                return (
                  <motion.div
                    key={index}
                    className={`carousel__slider__item shrink-0 ${isActive ? "carousel__slider__item--active" : ""}`}
                    animate={{ y: cardOffset }}
                    style={{
                      width: `${width - 20 * 2}px`,
                      height: `${height}px`,
                    }}
                  >
                    <div
                      className="item__3d-frame"
                      style={{
                        transform: `perspective(1200px) rotateY(${rotation}deg)`,
                      }}
                    >
                      <div className="item__3d-frame__box item__3d-frame__box--front group overflow-hidden bg-slate-900/40">
                        {/* 🌀 BLURRED BACKDROP (The 'Cool' Effect) */}
                        <img
                          src={project.image}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl scale-125 transition-transform duration-1000 group-hover:scale-150"
                        />
                        {/* 🖼️ MAIN IMAGE (Contained) */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-1000 z-10"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-dark-bg/90 via-dark-bg/40 to-transparent"></div>
                        <div className="relative z-10 text-center p-6 bg-dark-bg/60 backdrop-blur-md w-full mt-auto border-t border-white/5">
                          <span className="text-primary-400 font-bold text-[10px] uppercase tracking-widest bg-primary-950/40 px-3 py-1 rounded-full mb-2 inline-block">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-black mt-2 text-white group-hover:text-primary-400 transition-colors uppercase tracking-tighter">
                            {project.title}
                          </h3>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 block text-[8px] font-black uppercase tracking-widest text-primary-400/60 hover:text-white transition-colors"
                          >
                            View Source →
                          </a>
                        </div>
                      </div>
                      <div className="item__3d-frame__box--left"></div>
                      <div className="item__3d-frame__box--right"></div>
                    </div>
                  </motion.div>
                );
              })}
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
              Explore All Repositories
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
