import React from "react";
import "./ExperienceCard.css";
import experienceData from "./../../Data/experienceData";
function ExperienceCard() {
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
          <div className="exp-card">
            <p className="heading">{companyName}</p>
            <ul>
              <li>
                <span className="bold">Role:</span>
                {role}
              </li>
              <li>
                <span className="bold">Technologies:</span>
                {technologies}
              </li>
              <li>
                <span className="bold">Duration:</span>
                {duration}
              </li>
              <li>
                <span className="bold">Description:</span>
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
