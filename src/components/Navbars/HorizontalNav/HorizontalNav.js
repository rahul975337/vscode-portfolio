import React from "react";
import { Link } from "react-router-dom";
import "./HorizontalNav.css";
import { Close } from "@material-ui/icons";
import NavTab from "./NavTab";
import {
  VscEllipsis,
  VscGitCompare,
  VscSplitHorizontal,
} from "react-icons/vsc";
function HorizontalNav() {
  return (
    <nav className="hell">
      <NavTab tab_name="home.js" routeUrl="/" />
      <NavTab tab_name="projects.css" routeUrl="/projects" />
      <NavTab tab_name="skills.sql" routeUrl="/skills" />
      <NavTab tab_name="experience.sql" routeUrl="/experience" />
      <NavTab tab_name="about.md" routeUrl="/about" />
      <VscGitCompare className="compare-icon" />
      <VscSplitHorizontal className="split-screen-icon" />
      <VscEllipsis className="dot-icon" />
    </nav>
  );
}

export default HorizontalNav;
