import React from "react";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects__title">Mes projets</h1>
      <div className="projects__map">
        {projects.map((project, index) => (
          <div className="projects__map__key" key={index}>
            <a
              className="projects__map__key__a "
              href={project.url}
              target="blank"
            >
              <img
                className="projects__map__key__a__img"
                src={project.img}
                alt="poster projet"
              />
              <div className="projects__map__key__a__text">
                <h1 className="projects__map__key__a__text__title">
                  {project.title}
                </h1>
                <p className="projects__map__key__a__text__tools">
                  {project.tools}
                </p>
                <p className="projects__map__key__a__text__desc">
                  {project.desc}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
