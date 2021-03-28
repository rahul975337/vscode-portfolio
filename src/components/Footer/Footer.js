import React, { useContext } from "react";
import { FaSmile } from "react-icons/fa";
import { VscSourceControl } from "react-icons/vsc";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Themes";

function Footer() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div
      className="footer"
      style={{
        backgroundColor: `${currentTheme.darkBackground}`,
        borderTop: `1px ridge ${currentTheme.midBackground}`,
      }}
    >
      <a
        href="https://github.com/rahul975337/vscode-portfolio"
        target="__blank"
        className="master_link"
      >
        <div>
          <VscSourceControl className="icon-branch" />
          <span className="master">master*</span>
        </div>
      </a>

      <FaSmile className="icon-smile" />
    </div>
  );
}

export default Footer;
