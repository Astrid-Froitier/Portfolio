import React from "react";
import About from "./About";
import Tools from "./Tools";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import ShortNavBar from "./ShortNavBar";
// import NavBarMobile from "./NavBarMobile";

const OnePage = () => {
  return (
    <div className="main">
      <ShortNavBar />
      {/* <NavBarMobile /> */}
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
