import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { VscExtensions } from "react-icons/vsc";

const linkIcons = [
  {
    url: "https://portfolio-projects-rt.netlify.app/",
    dataTip: "Projects",
    dataFor: "projects",
    icon: <VscExtensions className="icon" />,
  },
  {
    url: "mailto:tilwani03@gmail.com",
    dataTip: "Mail me",
    dataFor: "mail",
    icon: <SiGmail className="icon" />,
  },
  {
    url: "https://www.linkedin.com/in/rahul-tilwani-965291194/",
    dataTip: "Reach me on LinkedIn",
    dataFor: "linkedin",
    icon: <SiLinkedin className="icon" />,
  },
  {
    url: "https://github.com/rahul975337",
    dataTip: "Visit my Github",
    dataFor: "github",
    icon: <SiGithub className="icon" />,
  },
  {
    url: "https://www.instagram.com/rahul_tilwani_12/",
    dataTip: "Reach me on Instagram",
    dataFor: "instagram",
    icon: <SiInstagram className="icon" />,
  },
];

export { linkIcons };
