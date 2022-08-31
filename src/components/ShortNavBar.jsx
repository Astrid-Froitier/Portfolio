import { Link } from "react-scroll";

const ShortNavBar = () => {
  // state

  // fonction

  // debug

  return (
    <div>
      <ul className="ShortNavBar">
        <div className="ShortNavBar__tools">
          <li className="ShortNavBar__tools__li">
            <Link
              className="ShortNavBar__tools__li__text"
              to="tools"
              activeClass="active"
              spy
              smooth
              isDynamic
              duration={1000}
            >
              Outils
            </Link>
          </li>
        </div>

        <div className="ShortNavBar__middle">
          <div className="ShortNavBar__middle__about">
            <li className="ShortNavBar__middle__about__li">
              <Link
                className="ShortNavBar__middle__about__li__text"
                to="about"
                activeClass="active"
                spy
                smooth
                isDynamic
                duration={1000}
              >
                Qui suis-je ?
              </Link>
            </li>
          </div>
          <div className="ShortNavBar__middle__home">
            <li className="ShortNavBar__middle__home__li">
              <Link
                to="home"
                activeClass="active"
                spy
                smooth
                isDynamic
                duration={1000}
              >
                <img
                  width={150}
                  height={150}
                  src="./assets/rose.svg"
                  alt="rose des vents"
                />
              </Link>
            </li>
          </div>
          <div className="ShortNavBar__middle__contact">
            <li className="ShortNavBar__middle__contact__li">
              <Link
                className="ShortNavBar__middle__contact__li__text"
                to="contact"
                activeClass="active"
                spy
                smooth
                isDynamic
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </div>
        </div>
        <div className="ShortNavBar__projects">
          <li className="ShortNavBar__projects__li">
            <Link
              className="ShortNavBar__projects__li__text"
              to="projects"
              activeClass="active"
              spy
              smooth
              isDynamic
              duration={1000}
            >
              Projets
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default ShortNavBar;
