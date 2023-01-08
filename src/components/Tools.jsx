import React from "react";
import { tools } from "../../data/tools";

const Tools = () => {
  return (
    <div>
      <div className="tools">
        <div className="tools__header">
          <h1 className="tools__header__title">Mes outils</h1>
        </div>
        <div className="tools__map">
          <div className="tools__map--tools">
            {tools.map((tool, index) => (
              <img
                src={tool.img}
                key={index}
                alt="logo"
                width={60}
                height={60}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
