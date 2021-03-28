import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import VerticalNav from "./components/Navbars/VerticalNav/VerticalNav";
import RightPannel from "./components/RightPannel/RightPannel";
import TopPanel from "./components/TopPanel/TopPanel";
import ThemeContext from "./ThemeContext";

function App() {
  const themeHook = useState("default");
  return (
    <ThemeContext.Provider value={themeHook}>
      <Router>

        <TopPanel />

        <div className="mid_pannel">
          <div className="left_panel">
            <VerticalNav />
          </div>
          <RightPannel />
        </div>
        <Footer />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
