import React, { useContext } from "react";
import { VscCode } from "react-icons/vsc";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Themes";
import projectData from "./../../Data/projectData";
import "./Projects.css";

function Projects() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div className="projects">
      <a
        href="https://portfolio-projects-rt.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="heading"
        style={{ color: `${currentTheme.heading}` }}
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
                  target="_blank"
                  rel="noreferrer"
                  href={project_url}
                  style={{ color: "var(--white-text)" }}
                >
                  <VscCode /> {project_name}
                </a>
              </li>

              <ul>
                <li
                  style={{ color: `${currentTheme.grey}` }}
                  className="project-description"
                >
                  {project_description}
                </li>
                <li
                  style={{ color: `${currentTheme.grey}` }}
                  className="project-tech"
                >
                  {project_tech}
                </li>
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
