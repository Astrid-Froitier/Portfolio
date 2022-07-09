import { Link } from "react-scroll";

const NavBar = () => {
  // state

  // functions

  // debug

  return (
    <div className="navBar">
      <div className="navBar__top">
        <Link className="navBar__top__about" to="about">
          Qui suis-je ?
        </Link>
      </div>
      <div className="navBar__middle ">
        <div className="navBar__middle__left">
          <Link className="navBar__middle__left__tools" to="tools">
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
          <Link className="navBar__middle__right__projects" to="projects">
            Projets
          </Link>
        </div>
      </div>
      <div className="navBar__bottom">
        <Link className="navBar__bottom__contact" to="contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
