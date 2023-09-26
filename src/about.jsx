import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./css/about.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>
        I have been keen of computer science since very early age. From early
        childhood I loved solving problems and playing around with Windows OS.
        Before starting my university education, I learned programming on my own
        with some online materials and established some general knowledge of
        software development. After couple of years of advanced development I
        decided to choose my career as a frontend developer Now I am Looking for
        an entry level job to start my professional career.
      </p>
    </div>
  );
};
const Skills = () => {
  return (
    <div className="skill-tree">
      <h2>Skills</h2>
      <ul>
        <li className="skill-html">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faHtml5} style={{ color: "#ff8800" }} />
          </div>
          <div className="skill-bar skill-bar-html"></div>
        </li>
        <li className="skill-css">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#005eff" }} />
          </div>
          <div className="skill-bar skill-bar-css"></div>
        </li>
        <li className="skill-js">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faSquareJs} style={{ color: "#fbff00" }} />
          </div>
          <div className="skill-bar skill-bar-js"></div>
        </li>

        <li className="skill-react">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faReact} style={{ color: "#00ccff" }} />
          </div>
          <div className="skill-bar skill-bar-react"></div>
        </li>
      </ul>
    </div>
  );
};
const About = () => {
  return (
    <div className="about">
      <AboutMe />
      <Skills />
    </div>
  );
};
export default About;
