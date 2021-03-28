import React from "react";
import {
  VscEllipsis,
  VscGitCompare,
  VscSplitHorizontal,
} from "react-icons/vsc";
import "./HorizontalNav.css";
import NavTab from "./NavTab";
import tabData from "./../../../Data/tabData";

function HorizontalNav() {
  return (
    <nav className="hell">
      {tabData.map((tab) => {
        const { tab_name, routeUrl } = tab;
        return <NavTab tab_name={tab_name} routeUrl={routeUrl} />;
      })}

      <VscGitCompare className="compare-icon" />
      <VscSplitHorizontal className="split-screen-icon" />
      <VscEllipsis className="dot-icon" />
    </nav>
  );
}

export default HorizontalNav;
