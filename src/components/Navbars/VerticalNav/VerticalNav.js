import React from "react";
import { FaFacebook, FaGithub, FaHome } from "react-icons/fa";
import {
  VscCode,
  VscExtensions,
  VscGithubInverted,
  VscHome,
  VscSettingsGear,
} from "react-icons/vsc";
import { IoPersonCircleOutline } from "react-icons/io5";

import { Link, NavLink } from "react-router-dom";
import "./VerticalNav.css";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
function VerticalNav() {
  return (
    <div className="vertical-nav">
      <NavLink
        exact
        activeClassName="icon--active"
        to="/"
        className="navbar_logo"
      >
        <VscHome className="icon" />
      </NavLink>
      <NavLink
        exact
        activeClassName="icon--active"
        to="/skills"
        className="navbar_logo"
      >
        <VscCode className="icon" />
      </NavLink>

      <hr />

      <a
        activeClassName="icon--active"
        href="https://portfolio-projects-rt.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar_logo"
      >
        <VscExtensions className="icon" />
      </a>
      <a
        activeClassName="icon--active"
        href="mailto:tilwani@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar_logo"
      >
        <SiGmail className="icon" />
      </a>
      <a
        activeClassName="icon--active"
        href="https://www.linkedin.com/in/rahul-tilwani-965291194/"
        target="_blank"
        rel="noreferrer"
        className="navbar_logo"
      >
        <SiLinkedin className="icon" />
      </a>
      <a
        activeClassName="icon--active"
        href="https://github.com/rahul975337"
        target="_blank"
        rel="noreferrer"
        className="navbar_logo"
      >
        <SiGithub className="icon" />
      </a>
      <a
        activeClassName="icon--active"
        href="https://www.instagram.com/rahul_tilwani_12/"
        target="_blank"
        rel="noreferrer"
        className="navbar_logo"
      >
        <SiInstagram className="icon" />
      </a>
      <NavLink
        exact
        activeClassName="icon--active "
        to="/about"
        className="navbar_logo about--icon"
      >
        <IoPersonCircleOutline className="icon" />
      </NavLink>
      <NavLink
        exact
        activeClassName="icon--active"
        to="/settings"
        className="navbar_logo settings--icon"
      >
        <VscSettingsGear className="icon" />
      </NavLink>
    </div>
  );
}

export default VerticalNav;
