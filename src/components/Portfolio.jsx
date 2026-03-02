import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import Swiper styles
const projects = [
  { title: "E-Commerce", category: "Web App", image: "/project1.png" },
  { title: "Fintech UI", category: "Mobile App", image: "/project2.png" },
  { title: "Crypto App", category: "Web3", image: "/project1.png" },
  { title: "Social Media", category: "Web App", image: "/project2.png" },
  { title: "Dashboard", category: "Admin", image: "/project1.png" },
  { title: "Dashboard 2", category: "Admin", image: "/project1.png" },
];

// Cloned array for infinite effect: [last-1, last, ...projects, first, first+1]
const extendedProjects = [
  projects[projects.length - 2],
  projects[projects.length - 1],
  ...projects,
  projects[0],
  projects[1],
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  // Start in the middle of the extended array (index 5 for a 6-project list)
  const [currIndex, setCurrIndex] = useState(
    Math.floor(extendedProjects.length / 2),
  );
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

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
  }, [currIndex]);

  const move = (index) => {
    setIsTransitioning(true);
    setCurrIndex(index);
  };

  const next = () => {
    move(currIndex + 1);
  };

  const prev = () => {
    move(currIndex - 1);
  };

  // Handle the jump at the end of transition
  const handleTransitionEnd = () => {
    if (currIndex >= extendedProjects.length - 2) {
      // If at clone of first items, jump back to real first items
      setIsTransitioning(false);
      setCurrIndex(2);
    } else if (currIndex <= 1) {
      // If at clone of last items, jump to real last items
      setIsTransitioning(false);
      setCurrIndex(extendedProjects.length - 3);
    }
  };

  const totalWidth = width * extendedProjects.length;
  // This formula centers the current index item
  const translateX =
    width > 0 ? currIndex * -width - width / 2 + window.innerWidth / 2 : 0;

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="py-24 relative bg-dark-bg/50 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-600/5 blur-[150px] rounded-full pointer-events-none"
      ></motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"
      ></motion.div>

      <div className="w-full relative z-10">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="text-center mb-16 px-6"
        >
          <span className="text-primary-400 font-black tracking-widest text-xs uppercase bg-primary-950/30 px-4 py-2 rounded-full border border-primary-500/20 mb-4 inline-block">
            Featured Projects
          </span>
          <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto italic border-l-2 border-indigo-500/50 pl-4 py-1">
            A small selection of my recent work across web and mobile platforms.
          </p>
        </motion.div>

        <div className="carousel relative">
          <div className="carousel__body">
            {/* Nav Buttons */}
            <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex space-x-12 z-20">
              <button
                onClick={prev}
                className="text-4xl hover:scale-125 transition-transform text-primary-400 drop-shadow-lg"
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button
                onClick={next}
                className="text-4xl hover:scale-125 transition-transform text-primary-400 drop-shadow-lg"
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>

            <div
              className="carousel__slider"
              onTransitionEnd={handleTransitionEnd}
              style={{
                width: `${totalWidth}px`,
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
                const projectY = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [
                    isActive ? 0 : index % 2 === 0 ? 50 : -50,
                    isActive ? 0 : index % 2 === 0 ? -50 : 50,
                  ],
                );

                return (
                  <motion.div
                    key={index}
                    className={`carousel__slider__item shrink-0 ${isActive ? "carousel__slider__item--active" : ""}`}
                    style={{
                      width: `${width - 20 * 2}px`,
                      height: `${height}px`,
                      y: projectY,
                    }}
                  >
                    <div
                      className="item__3d-frame"
                      style={{
                        transform: `perspective(1200px) rotateY(${rotation}deg)`,
                      }}
                    >
                      <div className="item__3d-frame__box item__3d-frame__box--front group overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-dark-bg/90 via-dark-bg/40 to-transparent"></div>
                        <div className="relative z-10 text-center p-6 bg-dark-bg/60 backdrop-blur-md w-full mt-auto border-t border-white/5">
                          <span className="text-primary-400 font-bold text-xs uppercase tracking-widest bg-primary-950/40 px-3 py-1 rounded-full mb-2 inline-block">
                            {project.category}
                          </span>
                          <h3 className="text-2xl font-black mt-2 text-white group-hover:text-primary-400 transition-colors">
                            {project.title}
                          </h3>
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
      </div>
    </section>
  );
};

export default Portfolio;
