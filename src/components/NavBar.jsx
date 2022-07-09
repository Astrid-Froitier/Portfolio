import { Link } from "react-scroll";

const NavBar = () => {
  // state

  // fonction

  // debug

  return (
    <div>
      <ul className="NavBar">
        <div className="NavBar__tools">
          <li className="NavBar__tools__li">
            <Link
              className="NavBar__tools__li__text"
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

        <div className="NavBar__middle">
          <div className="NavBar__middle__about">
            <li className="NavBar__middle__about__li">
              <Link
                className="NavBar__middle__about__li__text"
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
          <div className="NavBar__middle__home">
            <li className="NavBar__middle__home__li">
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
          <div className="NavBar__middle__contact">
            <li className="NavBar__middle__contact__li">
              <Link
                className="NavBar__middle__contact__li__text"
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
        <div className="NavBar__projects">
          <li className="NavBar__projects__li">
            <Link
              className="NavBar__projects__li__text"
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

export default NavBar;
