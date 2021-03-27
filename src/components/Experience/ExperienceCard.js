import React from "react";
import "./ExperienceCard.css";
function ExperienceCard() {
  return (
    <div className="exp-card">
      <p className="heading">Citoto</p>
      <ul>
        <li>
          <span className="bold">Role:</span> Mobile Developer Intern
        </li>
        <li>
          <span className="bold">Technology:</span> Flutter, Firebase
        </li>
        <li>
          <span className="bold">Duration:</span> 3 Months
        </li>
        <li>
          <span className="bold">Description:</span>
        </li>
        <ul>
          <li>
            <span className="bold"> Developed</span> the Frontend application
            using Flutter framework.
          </li>
          <li>
            <span className="bold"> Developed & enhanced</span> multiple
            features with customizability option across app.
          </li>
          <li>
            <span className="bold">Optimized</span> the codebase of the app.
          </li>
          <li>
            <span className="bold">Provided</span> application maintenance while
            working .
          </li>
          <li>
            <span className="bold">Performed</span> CRUD operations on Firestore
            to load/ remove data according to the business requirements.
          </li>
          <li>
            <span className="bold">Developed</span> Work Ethics and completing
            the assigned task on time.
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default ExperienceCard;
