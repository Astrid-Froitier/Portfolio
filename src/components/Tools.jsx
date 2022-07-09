import React from "react";
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
        </div>
        <div className="tools__map">
          <div className="tools__map--front">
            {fronts.map((front, index) => (
              <img
                src={front.img}
                key={index}
                alt="logo"
                width={50}
                height={50}
              />
            ))}
          </div>
          <div className="tools__map--back">
            {backs.map((back, index) => (
              <img
                src={back.img}
                key={index}
                alt="logo"
                width={50}
                height={50}
              />
            ))}
          </div>
          <div className="tools__map--tools">
            {tools.map((tool, index) => (
              <img
                src={tool.img}
                key={index}
                alt="logo"
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
