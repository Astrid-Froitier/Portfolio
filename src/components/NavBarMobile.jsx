import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navBarLinks } from "../../data/tools";

const NavBarMobile = () => {
  // state
  const [isOpen, setIsOpen] = useState(false);

  // const
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
              setIsOpen(true);
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
          {navBarLinks.map((link) => (
            <Link key={link.id} to={link.to}>
              <li>{link.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBarMobile;
