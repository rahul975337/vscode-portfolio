import { Close } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./NavTab.css";
function NavTab() {
  return (
    <div className="tab">
      <Link to="/education" className="tab_name">
        Skills.js
      </Link>
      <Link to="/" className="close_link">
        <Close className="close-icon" />
      </Link>
    </div>
  );
}

export default NavTab;
