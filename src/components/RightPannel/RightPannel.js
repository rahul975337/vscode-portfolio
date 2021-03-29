import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import ThemeContext from "../../ThemeContext";
import AppTheme from "../../Themes";
import About from "../About/About";
import Error from "../Error/Error";
import Experience from "../Experience/Experience";
import Home from "../Home/Home";
import HorizontalNav from "../Navbars/HorizontalNav/HorizontalNav";
import Projects from "../Projects/Projects";
function RightPannel() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div
      className="right_panel"
      style={{
        backgroundColor: `${currentTheme.midBackground}`,
        borderLeft: `1px ridge ${currentTheme.midBackground}`,
      }}
    >
      <div className="right_nav">
        <HorizontalNav />
      </div>
      <div
        className="pages"
        style={{ borderLeft: `1px ridge ${currentTheme.midBackground}` }}
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/skills">
            {/* <SkillsPage /> */}
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/*">
            <Error />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default RightPannel;
