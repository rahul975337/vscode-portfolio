import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Themes";
import vscode from "./../../images/vscode.png";
import "./TopPanel.css";
const options = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal"];
function TopPanel() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div
      className="top_panel"
      style={{
        backgroundColor: `${currentTheme.darkBackground}`,
      }}
    >
      <img className="vslogo" src={vscode} alt="" />
      {options.map((option, key) => {
        return (
          <p key={key} className="top_options">
            {option}
          </p>
        );
      })}
      <p className="top_heading"> Rahul Tilwani | Portfolio</p>
    </div>
  );
}

export default TopPanel;
