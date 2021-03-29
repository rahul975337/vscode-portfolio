import React, { useContext } from "react";
import {
  VscEllipsis,
  VscGitCompare,
  VscSplitHorizontal,
} from "react-icons/vsc";
import ReactTooltip from "react-tooltip";
import ThemeContext from "../../../ThemeContext";
import AppTheme from "../../../Themes";
import tabData from "./../../../Data/tabData";
import "./HorizontalNav.css";
import NavTab from "./NavTab";

function HorizontalNav() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: `${currentTheme.darkBackground}`,
        borderTop: `1px ridge ${currentTheme.midBackground}`,
      }}
    >
      {tabData.map((tab, key) => {
        const { tab_name, routeUrl, logo } = tab;
        return (
          <NavTab
            key={key}
            logo={logo}
            tab_name={tab_name}
            routeUrl={routeUrl}
            closeUrl={tab_name === "home.js" ? "/dh" : "/"}
          />
        );
      })}
      <ReactTooltip id="close" place="right" />
      <VscGitCompare className="compare-icon hor-nav-icons" />
      <VscSplitHorizontal className="split-screen-icon hor-nav-icons" />
      <VscEllipsis className="dot-icon hor-nav-icons" />
    </nav>
  );
}

export default HorizontalNav;
