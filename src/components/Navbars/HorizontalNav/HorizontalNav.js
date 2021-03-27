import React from "react";
import { Link } from "react-router-dom";
import "./HorizontalNav.css";
import { Close } from "@material-ui/icons";
import NavTab from "./NavTab";
function HorizontalNav() {
  return (
    <div>
      <nav className="hell">
        <NavTab />
        <NavTab />
        <NavTab />
        <NavTab />
      </nav>
    </div>
  );
}

export default HorizontalNav;
