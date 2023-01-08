import React from "react";
import { Link } from "react-router-dom";
import { navBarLinks } from "../../data/tools";

const NavBarMobile = () => {
  return (
    <div className="navBarMobile">
      <nav className="navBarMobile__map">
        <ul>
          {navBarLinks &&
            navBarLinks.map((link) => (
              <Link key={link.id} to={link.to}>
                <li>{link.title}</li>
              </Link>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBarMobile;
