/* eslint-disable no-unused-vars */
import { ClickAwayListener, makeStyles, Portal } from "@material-ui/core";
import React, { useContext } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { VscCode, VscHome, VscSettingsGear } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import ThemeContext from "../../../ThemeContext";
import AppTheme from "../../../Themes";
import themeChangerData from "./../../../Data/themeChangeData";
import { linkIcons } from "./../../../Data/verticalNavData";
import "./VerticalNav.css";

function VerticalNav() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  const useStyles = makeStyles((theme) => ({
    dropdown: {
      position: "fixed",
      width: "20vw",
      height: "50vh",
      bottom: "3.2vh",
      left: "3.5vw",
      border: `1px ridge ${currentTheme.midBackground}`,
      borderRadius: 3,
      padding: theme.spacing(1),
      backgroundColor: `${currentTheme.darkBackground}`,
      color: "var(--white-text)",
      fontWeight: "normal",
      // eslint-disable-next-line no-useless-computed-key
      ["@media (max-width:768px)"]: {
        width: "40vw",
        left: "6vw",
      },
    },
  }));
  const classes = useStyles();

  const activeIconStyle = {
    borderLeft: `0.1px solid ${currentTheme.highlight}`,
    color: `${currentTheme.highlight}`,
  };
  const iconStyle = {
    color: `${currentTheme.grey}`,
  };
  return (
    <div
      className="vertical-nav"
      style={{
        backgroundColor: `${currentTheme.darkBackground}`,
      }}
    >
      <NavLink
        exact
        activeStyle={activeIconStyle}
        to="/"
        data-tip="Home"
        data-for="home"
      >
        <VscHome className="icon" style={iconStyle} />
        <ReactTooltip id="home" />
      </NavLink>
      <NavLink
        exact
        to="/skills"
        activeStyle={activeIconStyle}
        data-tip="Skills"
        data-for="skills"
      >
        <VscCode className="icon" style={iconStyle} />
        <ReactTooltip id="skills" />
      </NavLink>

      <hr />

      {linkIcons.map((linkIcon, key) => {
        const { url, dataTip, dataFor, icon } = linkIcon;
        return (
          <a
            key={key}
            style={{ color: AppTheme.default.grey }}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
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
        to="/about"
        className="about--icon"
        data-tip="About me"
        data-for="about-me"
        activeStyle={activeIconStyle}
      >
        <IoPersonCircleOutline className="icon" style={iconStyle} />
        <ReactTooltip id="about-me" />
      </NavLink>

      <div className=" settings--icon" data-tip="Settings" data-for="settings">
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <VscSettingsGear
              className="icon"
              style={iconStyle}
              onClick={handleClick}
            />

            {open ? (
              <Portal>
                <div className={classes.dropdown}>
                  <p className="setting-heading">Choose your Color Theme</p>
                  <div className="themes">
                    {themeChangerData.map((themeData) => {
                      const { themeName, backgroundColor, theme } = themeData;
                      return (
                        <div className="theme">
                          <div
                            className="theme_circle"
                            style={{
                              backgroundColor: backgroundColor,
                              // border: `1px solid ${highlight}`,
                            }}
                            onMouseOver={() => {
                              setThemeMode(theme);
                            }}
                          ></div>
                          <div className="theme_name">{themeName}</div>
                        </div>
                      );
                    })}
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
