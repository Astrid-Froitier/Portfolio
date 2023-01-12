import React from "react";
import Typewriter from "typewriter-effect";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="home">
      <div className="home__text">
        <div className="home__text__title">Astrid Froitier</div>

        <div className="home__text__subtitle">
          Developpeuse
          <Typewriter
            options={{
              strings: [" junior", " aventurière", " créative", " Accrocheuse"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="home__navbar">
        <NavBar />
      </div>
      <div className="home__img">
        <img
          className="home__img__logo"
          src="./assets/rose.png"
          alt="compass"
        />
      </div>
    </div>
  );
};

export default Home;
