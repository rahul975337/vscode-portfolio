import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Themes";
import experienceData from "./../../Data/experienceData";
import "./ExperienceCard.css";

function ExperienceCard() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <>
      {experienceData.map((experience) => {
        const {
          companyName,
          role,
          technologies,
          duration,
          description,
        } = experience;
        return (
          <div
            className="exp-card"
            style={{ color: `${AppTheme.default.grey}` }}
          >
            <p className="heading" style={{ color: `${currentTheme.heading}` }}>
              {companyName}
            </p>
            <ul>
              <li>
                <span>Role:</span>
                {role}
              </li>
              <li>
                <span>Technologies:</span>
                {technologies}
              </li>
              <li>
                <span>Duration:</span>
                {duration}
              </li>
              <li>
                <span>Description:</span>
                <ul>
                  {description.map((descr) => {
                    const { point } = descr;
                    return <li>{point}</li>;
                  })}
                </ul>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default ExperienceCard;
