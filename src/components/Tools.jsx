import React from "react";
import NavBar from "./NavBar";
import { tools, backs, fronts } from "../../data/tools";

const Tools = () => {
  // state

  // fonction

  // debug

  return (
    <div>
      <div className="tools">
        <div className="tools__header">
          <h1 className="tools__header__title">Mes outils</h1>
          <div>
            <NavBar />
          </div>
        </div>
        <div className="tools__map">
          <div className="tools__map--front">
            {fronts.map((front) => (
              <img src={front.img} alt="logo" width={50} height={50} />
            ))}
          </div>
          <div className="tools__map--back">
            {backs.map((back) => (
              <img src={back.img} alt="logo" width={50} height={50} />
            ))}
          </div>
          <div className="tools__map--tools">
            {tools.map((tool) => (
              <img src={tool.img} alt="logo" width={50} height={50} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
