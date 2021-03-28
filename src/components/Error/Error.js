import React from "react";
import "./Error.css";
function Error() {
  return (
    <div classNa="error">
      <img
        className="error-img"
        src="https://i.imgur.com/A040Lxr.png"
        alt="errorimage"
      />
      <p className="error-text">Error 404 !!</p>
      <p className="error-text">Page Not Found !!</p>
    </div>
  );
}

export default Error;
