import { FaCss3, FaHtml5, FaJsSquare, FaSass } from "react-icons/fa";
import { SiDart } from "react-icons/si";

const tabData = [
  {
    tab_name: "home.js",
    routeUrl: "/",
    logo: <FaJsSquare className="logo js" />,
  },
  {
    tab_name: "projects.css",
    routeUrl: "/projects",
    logo: <FaCss3 className="logo css" />,
  },
  {
    tab_name: "skills.html",
    routeUrl: "/skills",
    logo: <FaHtml5 className="logo html" />,
  },
  {
    tab_name: "experience.dart",
    routeUrl: "/experience",
    logo: <SiDart className="logo dart" />,
  },
  {
    tab_name: "about.sass",
    routeUrl: "/about",
    logo: <FaSass className="logo sass" />,
  },
];

export default tabData;
