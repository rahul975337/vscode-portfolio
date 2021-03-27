import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import VerticalNav from "./components/Navbars/VerticalNav/VerticalNav";
import HorizontalNav from "./components/Navbars/HorizontalNav/HorizontalNav";
import { FaCodeBranch, FaSmile } from "react-icons/fa";
function App() {
  return (
    <div className="main">
      <Router>
        <div className="top_panel">Rahul Tilwani | Portfolio</div>

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
                <Route exact path="/skills">
                  <Skills />
                </Route>
                <Route exact path="/education">
                  <Education />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="left_icon">
            <FaCodeBranch className="icon-branch" />
            <h className="master">master</h>
          </div>

          <FaSmile className="icon-smile" />
        </div>
      </Router>
    </div>
  );
}

export default App;
