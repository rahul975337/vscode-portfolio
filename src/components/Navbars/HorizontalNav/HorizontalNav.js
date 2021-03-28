import React from "react";
import {
  VscEllipsis,
  VscGitCompare,
  VscSplitHorizontal,
} from "react-icons/vsc";
import tabData from "./../../../Data/tabData";
import "./HorizontalNav.css";
import NavTab from "./NavTab";

function HorizontalNav() {
  return (
    <nav className="hell">
      {tabData.map((tab) => {
        const { tab_name, routeUrl, logo } = tab;
        return <NavTab logo={logo} tab_name={tab_name} routeUrl={routeUrl} />;
      })}

      <VscGitCompare className="compare-icon" />
      <VscSplitHorizontal className="split-screen-icon" />
      <VscEllipsis className="dot-icon" />
    </nav>
  );
}

export default HorizontalNav;
