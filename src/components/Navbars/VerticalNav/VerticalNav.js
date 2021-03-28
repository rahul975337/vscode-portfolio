import { ClickAwayListener, makeStyles, Portal } from "@material-ui/core";
import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { VscCode, VscHome, VscSettingsGear } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { linkIcons } from "./../../../Data/verticalNavData";
import "./VerticalNav.css";
const useStyles = makeStyles((theme) => ({
  dropdown: {
    position: "fixed",
    width: "20vw",
    height: "50vh",
    bottom: "3.5vh",
    left: "3.5vw",

    border: "1px ridge dark-background",
    borderRadius: 3,
    padding: theme.spacing(1),
    backgroundColor: "rgb(47,54,61)",
    color: "white",
    fontWeight: "normal",
  },
}));

function VerticalNav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div className="vertical-nav">
      <NavLink
        exact
        activeClassName="icon--active"
        to="/"
        className="navbar_logo"
        data-tip="Home"
        data-for="home"
      >
        <VscHome className="icon" />
        <ReactTooltip id="home" />
      </NavLink>
      <NavLink
        exact
        activeClassName="icon--active"
        to="/skills"
        className="navbar_logo"
        data-tip="Skills"
        data-for="skills"
      >
        <VscCode className="icon" />
        <ReactTooltip id="skills" />
      </NavLink>

      <hr />

      {linkIcons.map((linkIcon) => {
        const { url, dataTip, dataFor, icon } = linkIcon;
        return (
          <a
            activeClassName="icon--active"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar_logo"
            data-tip={dataTip}
            data-for={dataFor}
          >
            {icon}
            <ReactTooltip id={dataFor} />
          </a>
        );
      })}

      <NavLink
        exact
        activeClassName="icon--active "
        to="/about"
        className="navbar_logo about--icon"
        data-tip="About me"
        data-for="about-me"
      >
        <IoPersonCircleOutline className="icon" />
        <ReactTooltip id="about-me" />
      </NavLink>

      <div
        className="navbar_logo settings--icon"
        data-tip="Settings"
        data-for="settings"
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <VscSettingsGear className="icon" onClick={handleClick} />

            {open ? (
              <Portal>
                <div className={classes.dropdown}>
                  <p className="setting-heading">Choose your Color Theme</p>

                  <div className="themes">
                    <div className="theme default">
                      <div
                        className="theme_circle"
                        style={{ backgroundColor: "pink" }}
                      ></div>
                      <div className="theme_name">Default Theme</div>
                    </div>
                    <div className="theme atom_one_dark">
                      <div
                        className="theme_circle"
                        style={{ backgroundColor: "pink" }}
                      ></div>
                      <div className="theme_name">Atom One Dark</div>
                    </div>
                    <div className="theme github_dark">
                      <div
                        className="theme_circle"
                        style={{ backgroundColor: "pink" }}
                      ></div>
                      <div className="theme_name">Github Dark</div>
                    </div>
                    <div className="theme community_material">
                      <div
                        className="theme_circle"
                        style={{ backgroundColor: "pink" }}
                      ></div>
                      <div className="theme_name">Community Material</div>
                    </div>
                    <div className="theme vscode_dark">
                      <div
                        className="theme_circle"
                        style={{ backgroundColor: "pink" }}
                      ></div>
                      <div className="theme_name">Vscode Dark</div>
                    </div>
                  </div>
                </div>
              </Portal>
            ) : null}
          </div>
        </ClickAwayListener>
        <ReactTooltip id="settings" />
      </div>
    </div>
  );
}

export default VerticalNav;
