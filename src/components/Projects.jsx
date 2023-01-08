import React from "react";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects__title">Mes projets</h1>
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
