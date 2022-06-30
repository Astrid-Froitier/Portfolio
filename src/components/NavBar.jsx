import { NavLink } from "react-router-dom";
// import Logo from "../../public/logo/rose.svg";

const NavBar = () => {
  // state

  // fonction

  // debug

  return (
    <div>
      <div className="NavBar">
        <div className="NavBar__tools">
          <NavLink className="NavBar__tools__text" to="/tools">
            Outils
          </NavLink>
        </div>

        <div className="NavBar__middle">
          <div className="NavBar__middle__about">
            <NavLink className="NavBar__middle__about__text" to="/about">
              Qui suis-je ?
            </NavLink>
          </div>
          <div className="NavBar__middle__home">
            <NavLink to="/">
              <img
                width={150}
                height={150}
                src="./assets/rose.svg"
                alt="rose des vents"
              />
            </NavLink>
          </div>
          <div className="NavBar__middle__contact">
            <NavLink className="NavBar__middle__contact__text" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
        <div className="NavBar__projects">
          <NavLink className="NavBar__projects__text" to="/projects">
            Projets
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
