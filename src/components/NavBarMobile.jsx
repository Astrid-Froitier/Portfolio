import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navBarLinks } from "../../data/tools";

const NavBarMobile = () => {
  // state
  const [isOpen, setIsOpen] = useState(false);

  // function

  // debug

  return (
    <div className="navBarMobile">
      <div className="navBarMobile__map">
        {!isOpen ? (
          <button
            // className="navBarMobile__map"
            type="button"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <img src="/assets/rose.svg" alt="logo" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <img src="/assets/rose.svg" alt="logo" />
          </button>
        )}
        <ul>
          {navBarLinks &&
            navBarLinks.map((link) => (
              <Link key={link.id} to={link.to}>
                <p>{link.title}</p>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBarMobile;
