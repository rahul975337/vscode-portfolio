import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Themes";
import skillsData from "./../../Data/skillsData";
import "./Skills.css";

function Skills() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <>
      {skillsData.map((skill) => {
        const { heading, skillsList } = skill;

        return (
          <div className="skills">
            <p
              className="heading"
              style={{
                color: `${currentTheme.heading}`,
              }}
            >
              {heading}
            </p>
            <ul>
              {skillsList.map((listItem) => {
                return (
                  <li
                    style={{
                      color: `${currentTheme.grey}`,
                    }}
                  >
                    {listItem}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Skills;
