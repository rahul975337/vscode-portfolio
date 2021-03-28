import React from "react";
import skillsData from "./../../Data/skillsData";
import "./Skills.css";
function Skills() {
  return (
    <div className="skills">
      {skillsData.map((skill) => {
        const { heading, skillsList } = skill;

        return (
          <>
            <p className="heading">{heading}</p>
            <ul>
              {skillsList.map((listItem) => {
                return <li>{listItem}</li>;
              })}
            </ul>
          </>
        );
      })}
    </div>
  );
}

export default Skills;
