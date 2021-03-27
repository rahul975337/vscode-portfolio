import React from "react";
import { FaFacebook, FaGithub, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./VerticalNav.css";
function VerticalNav() {
  return (
    <div className="vertical-nav">
      <Link to="/skills" className="navbar_logo">
        <FaHome className="icon" />
      </Link>
      <Link to="/skills" className="navbar_logo">
        <FaFacebook className="icon" />
      </Link>
      <hr/>
      <Link to="/skills" className="navbar_logo">
        <FaGithub className="icon" />
      </Link>
      <Link to="/skills" className="navbar_logo">
        <FaHome className="icon" />
      </Link>
    </div>
  );
}

export default VerticalNav;
