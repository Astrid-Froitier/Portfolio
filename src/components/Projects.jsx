import React from "react";
import projects from "../../data/projects";

const Projects = () => {
  // state

  // fonction

  // debug
  console.log(projects);
  return (
    <div className="projects">
      <div className="projects__header">
        <h1 className="projects__header__title">Mes projets</h1>
      </div>
      <div className="projects__details">
        <div className="projects__details__map">
          {projects.map((project, index) => (
            <div className="projects__details__map__key" key={index}>
              <a
                className="projects__details__map__key__a "
                href={project.url}
                target="blank"
              >
                <img
                  className="projects__details__map__key__a__img"
                  src={project.img}
                  alt=""
                />
              </a>
              <h1 className="projects__details__map__key__title">
                {project.title}
              </h1>
              <p className="projects__details__map__key__tools">
                {project.tools}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
