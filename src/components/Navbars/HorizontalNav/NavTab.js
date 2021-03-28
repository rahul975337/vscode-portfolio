import { Close } from "@material-ui/icons";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../../ThemeContext";
import AppTheme from "../../../Themes";
import "./NavTab.css";

function NavTab({ routeUrl, tab_name, logo, closeUrl }) {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    // <div className="tab">
    <NavLink
      exact
      to={routeUrl}
      activeStyle={{
        backgroundColor: `${currentTheme.midBackground}`,
        borderTop: `1px solid  ${currentTheme.highlight}`,
        color: "var(--white-text)",
      }}
      style={{
        display: "flex",
        height: "35px",
        alignItems: "center",
        fontSize: "12px",
        fontWeight: "normal",
        padding: " 0 5px",
        transition: " ease-in 0.2s",
        backgroundColor: `${currentTheme.darkBackground}`,
        borderRight: `1px solid  ${currentTheme.midBackground}`,
        color: `${currentTheme.grey}`,
      }}
    >
      {logo}
      <p className="tab_name">{tab_name}</p>
      <NavLink
        exact
        to={closeUrl}
        className="close_link"
        data-tip="Close"
        data-for="close"
        style={{
          color: `${currentTheme.grey}`,
        }}
      >
        <Close className="close-icon" />
      </NavLink>
    </NavLink>
    // </div>
  );
}

export default NavTab;
