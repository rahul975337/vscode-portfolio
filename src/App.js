import { useState } from "react";
import { FaSmile } from "react-icons/fa";
import { VscSourceControl } from "react-icons/vsc";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import HorizontalNav from "./components/Navbars/HorizontalNav/HorizontalNav";
import VerticalNav from "./components/Navbars/VerticalNav/VerticalNav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/skills/Skills";
import vscode from "./images/vscode.png";
import ThemeContext from "./ThemeContext";
function App() {
  const themeHook = useState("default");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="main">
        <Router>
          <div className="top_panel">
            <img className="vslogo" src={vscode} alt="" />
            <p className="top_options"> File</p>
            <p className="top_options">Edit</p>
            <p className="top_options"> Selection</p>
            <p className="top_options"> View</p>
            <p className="top_options"> Go</p>
            <p className="top_options"> Run</p>
            <p className="top_options"> Terminal</p>
            <p className="top_heading"> Rahul Tilwani | Portfolio</p>
          </div>

          <div className="mid_pannel">
            <div className="left_panel">
              <VerticalNav />
            </div>

            <div className="right_panel">
              <div className="right_nav">
                <HorizontalNav />
              </div>
              <div className="pages">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/projects">
                    <Projects />
                  </Route>
                  <Route exact path="/skills">
                    <Skills />
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
          </div>
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
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
