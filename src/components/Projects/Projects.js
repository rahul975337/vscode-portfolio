import React from "react";
import { VscCode } from "react-icons/vsc";
import projectData from "./../../Data/projectData";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <a
        href="https://portfolio-projects-rt.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="heading"
      >
        Some of my Projects are
      </a>

      <ul>
        {projectData.map((project) => {
          const {
            project_name,
            project_url,
            project_description,
            project_tech,
          } = project;
          return (
            <>
              <li className="project-name">
                <a
                  className="proj_url"
                  target="_blank"
                  rel="noreferrer"
                  href={project_url}
                >
                  <VscCode /> {project_name}
                </a>
              </li>

              <ul>
                <li className="project-description">{project_description}</li>
                <li className="project-tech">{project_tech}</li>
              </ul>
              <br />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
