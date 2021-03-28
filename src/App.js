import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import HorizontalNav from "./components/Navbars/HorizontalNav/HorizontalNav";
import VerticalNav from "./components/Navbars/VerticalNav/VerticalNav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import TopPanel from "./components/TopPanel/TopPanel";
import ThemeContext from "./ThemeContext";
function App() {
  const themeHook = useState("default");
  return (
    <ThemeContext.Provider value={themeHook}>
      <>
        <Router>
          <TopPanel />

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
          <Footer />
        </Router>
      </>
    </ThemeContext.Provider>
  );
}

export default App;
