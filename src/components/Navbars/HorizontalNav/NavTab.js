import { Close } from "@material-ui/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavTab.css";
import { FaJsSquare } from "react-icons/fa";
function NavTab({ routeUrl, tab_name }) {
  return (
    // <div className="tab">
    <NavLink exact to={routeUrl} className="tab" activeClassName="tab-active">
      <FaJsSquare className="logo" />
      <p className="tab_name">{tab_name}</p>
      <NavLink exact to="/" className="close_link">
        <Close className="close-icon" />
      </NavLink>
    </NavLink>
    // </div>
  );
}

export default NavTab;
