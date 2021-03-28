import React from "react";
import aboutData from "../../Data/aboutData";
import "./About.css";
function About() {
  return (
    <div className="about-me">
      <p className="heading">Hi there! I am Rahul Tilwani</p>
      {aboutData.map((line) => {
        const { point } = line;
        return <li>{point}</li>;
      })}
    </div>
  );
}

export default About;
