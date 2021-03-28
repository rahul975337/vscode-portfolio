import React from "react";
import vscode from "./../../images/vscode.png";
const options = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal"];
function TopPanel() {
  return (
    <div className="top_panel">
      <img className="vslogo" src={vscode} alt="" />
      {options.map((option) => {
        return <p className="top_options">{option}</p>;
      })}
      <p className="top_heading"> Rahul Tilwani | Portfolio</p>
    </div>
  );
}

export default TopPanel;
