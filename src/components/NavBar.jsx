import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__top">
        <Link
          className="navBar__top__about"
          to="about"
          activeClass="active"
          spy
          smooth
          isDynamic
          duration={1000}
        >
          Qui suis-je ?
        </Link>
      </div>
      <div className="navBar__middle ">
        <div className="navBar__middle__left">
          <Link
            className="navBar__middle__left__tools"
            to="tools"
            activeClass="active"
            spy
            smooth
            isDynamic
            duration={1000}
          >
            Outils
          </Link>
        </div>
        <img
          className="navBar__middle__image"
          width={300}
          height={300}
          src="./assets/rose.png"
          alt="rose des vents"
        />
        <div className="navBar__middle__right">
          <Link
            className="navBar__middle__right__projects"
            to="projects"
            activeClass="active"
            spy
            smooth
            isDynamic
            duration={1000}
          >
            Projets
          </Link>
        </div>
      </div>
      <div className="navBar__bottom">
        <Link
          className="navBar__bottom__contact"
          to="contact"
          activeClass="active"
          spy
          smooth
          isDynamic
          duration={1000}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
