import React from "react";
import { FaSmile } from "react-icons/fa";
import { VscSourceControl } from "react-icons/vsc";

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/rahul975337/vscode-portfolio"
        target="__blank"
        className="master_link"
      >
        <div className="left_icon">
          <VscSourceControl className="icon-branch" />
          <h className="master">master*</h>
        </div>
      </a>

      <FaSmile className="icon-smile" />
    </div>
  );
}

export default Footer;
