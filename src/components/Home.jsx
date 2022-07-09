import React from "react";
import Typewriter from "typewriter-effect";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="home">
      {/* <img
        className="home__left"
        width={600}
        height={750}
        src="./assets/pot-pourris.jpg"
        alt="pot pourris"
      /> */}
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
      </div>
    </div>
  );
};

export default Home;
