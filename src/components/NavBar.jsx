import { NavLink } from "react-router-dom";
import Logo from "../../public/logo/rose.svg";

const NavBar = () => {
  // state

  // fonction

  // debug

  return (
    <div>
      <div className="flex justify-end text-xl font-par">
        <div className="p-3 my-auto">
          <NavLink to="/projects">Projets</NavLink>
        </div>
        <div>
          <div className="flex justify-center p-3">
            <NavLink to="/about">Qui suis-je ?</NavLink>
          </div>
          <div className="w-32 h-32">
            <NavLink to="/">
              <img src={Logo} alt="rose des vents" />
            </NavLink>
          </div>
          <div className="flex justify-center p-3">
            <NavLink to="/tools">Outils</NavLink>
          </div>
        </div>
        <div className="p-3 my-auto">
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
