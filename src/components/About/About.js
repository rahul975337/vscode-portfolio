import React, { useContext } from "react";
import aboutData from "../../Data/aboutData";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Themes";
import "./About.css";
function About() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div className="about-me" style={{ color: `${currentTheme.grey}` }}>
      <p className="heading" style={{ color: `${currentTheme.heading}` }}>
        Hi there! I am Rahul Tilwani
      </p>
      {aboutData.map((line) => {
        const { point } = line;
        return <li>{point}</li>;
      })}
    </div>
  );
}

export default About;
