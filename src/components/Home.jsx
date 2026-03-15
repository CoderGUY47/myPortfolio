import React from "react";
import Hero from "./Hero";
import TechStack from "./TechStack";
import Capabilities from "./Capabilities";
import ProjectShowcase from "./ProjectShowcase";
import Protocol from "./Protocol";
import Contact from "./Contact";
import Experience from "./Experience";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <main className="space-y-10 md:space-y-10 overflow-x-hidden pt-12">
      <Hero />
      <TechStack />
      <div className="space-y-10 md:space-y-10 px-4 sm:px-6 lg:px-10 pb-14">
        <div className="space-y-12">
          <ProjectShowcase />
        </div>
        <Protocol />
        <Experience />
        <Capabilities />
        <Contact />
        <Feedback />
      </div>
    </main>
  );
};

export default Home;
