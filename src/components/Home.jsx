import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img
        width={600}
        height={820}
        src="./assets/pot-pourris.jpg"
        alt="pot pourris"
      />
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
        <div className="home__right__compass">
          <div className="home__right__compass__top">
            <Link className="home__right__compass__top__tools" to="/tools">
              Qui suis-je ?
            </Link>
          </div>
          <div className="home__right__compass__middle">
            <div className="home__right__compass__middle__left">
              <Link
                className="home__right__compass__middle__left__about"
                to="/about"
              >
                Outils
              </Link>
            </div>
            <img
              className="home__right__compass__middle__image"
              width={300}
              height={300}
              src="./assets/rose.png"
              alt="rose des vents"
            />
            <div className="home__right__compass__middle__right">
              <Link
                className="home__right__compass__middle__right__projects"
                to="/projects"
              >
                Projets
              </Link>
            </div>
          </div>
          <div className="home__right__compass__bottom">
            <Link
              className="home__right__compass__bottom__contact"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
