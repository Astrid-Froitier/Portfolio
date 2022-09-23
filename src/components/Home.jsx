import React from "react";
import Typewriter from "typewriter-effect";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="home">
      <div className="home__right">
        <div className="home__right__text">
          <div className="home__right__text__title">Astrid Froitier</div>
          <div className="home__right__text__subtitle">
            <Typewriter
              options={{
                strings: [
                  "Grande développeuse en devenir !",
                  "Bébé developpeuse deviendra grande !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="home__navbar">
          <NavBar />
        </div>
        <div className="home__right__img">
          <img
            className="home__right__img__logo"
            src="../../public/assets/rose.png"
            alt="compass"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
