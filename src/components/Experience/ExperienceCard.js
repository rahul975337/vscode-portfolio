import React from "react";
import "./ExperienceCard.css";

const experienceData = [
  {
    companyName: "Citoto",
    role: "Mobile Developer Intern",
    technologies: "Flutter, Firebase",
    duration: "3 Months",
    description: [
      "Developed the Frontend application using Flutter framework.",
      "Developed & enhanced multiple features with customizability option across app.",
      "Optimized the codebase of the app.",
      "Provided application maintenance while working .",
      "Performed CRUD operations on Firestore to load/ remove data according to the business requirements.",
      "Developed Work Ethics and completing the assigned task on time.",
    ],
  },
  {
    companyName: "",
    role: "",
    technologies: "",
    duration: "",
    description: [],
  },
];
function ExperienceCard() {
  return (
    <div className="exp-card">
      <p className="heading">Citoto</p>
      <ul>
        <li>
          <span className="bold">Role:</span> Mobile Developer Intern
        </li>
        {/* <li>
          <span className="bold">Technologies:</span> Flutter, Firebase
        </li>
        <li>
          <span className="bold">Duration:</span> 3 Months
        </li>
        <li>
          <span className="bold">Description:</span>
        </li> */}
        {/* <ul>
          <li>Developed the Frontend application using Flutter framework.</li>
          <li>
            Developed & enhanced multiple features with customizability option
            across app.
          </li>
          <li>Optimized the codebase of the app.</li>
          <li>Provided application maintenance while working .</li>
          <li>
            Performed CRUD operations on Firestore to load/ remove data
            according to the business requirements.
          </li>
          <li>
            Developed Work Ethics and completing the assigned task on time.
          </li>
        </ul> */}
      </ul>
    </div>
  );
}

export default ExperienceCard;
