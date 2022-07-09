import React from "react";
import About from "./About";
import Tools from "./Tools";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import ShortNavBar from "./ShortNavBar";

const OnePage = () => {
  return (
    <div className="main">
      <ShortNavBar />
      <div className="main__onePage">
        <Home />
        <About />
        <Tools />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default OnePage;
