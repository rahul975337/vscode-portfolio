import React from "react";
import { VscGithub } from "react-icons/vsc";
import Typewriter from "typewriter-effect";
import { picUrl, strings } from "./../../Data/homeData";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="center-content">
        <img className="pic" alt="" src={picUrl} />
        <div>Hi, I am</div>
        <strong>Rahul Tilwani</strong>
        <Typewriter
          options={{
            strings: strings,
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
