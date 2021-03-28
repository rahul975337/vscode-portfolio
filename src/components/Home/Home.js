import React from "react";
import { VscGithub } from "react-icons/vsc";
import Typewriter from "typewriter-effect";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="center-content">
        <img
          className="pic"
          alt=""
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFiUKa8nwzryQ/profile-displayphoto-shrink_400_400/0/1599043215731?e=1622073600&v=beta&t=0PFOnzs2q-ID8x35JDn_Dipqf9Gxh3Pj-kOxxhOCxDg"
        />
        <div>Hi, I am</div>
        <strong>Rahul Tilwani</strong>
        <Typewriter
          options={{
            strings: [
              "Full Stack Web Developer",
              "Flutter Developer",
              "Android Developer",
              "Learner",
              "Problem Solver",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
        <button className="button">
          <VscGithub />
          <p>rahul975337</p>
        </button>
      </div>
    </div>
  );
}

export default Home;
