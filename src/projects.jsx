import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./css/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h3>Projects</h3>
      <div className="projects-box">
        <div className="project">
          <img src="/images/samurai-logo.png" alt="" />
          <div className="project-info">
            <span>My Portfolio</span>
            <a href="https://gagik-manasyan-portfolio.netlify.app/">Visit</a>
            <a href="" className="a-github">
              <FontAwesomeIcon icon={faGithub} className="nav-icon" />
            </a>
          </div>
        </div>
        <div className="project">
          <img src="/images/project-logos/nairi-logo.png" alt="" />
          <div className="project-info">
            <span>Nairi Restaurant</span>
            <a href="https://nairi-restaurant.netlify.app/">Visit</a>
            <a
              href="https://github.com/GagikManasyan/Nairi-Restaurant"
              className="a-github"
            >
              <FontAwesomeIcon icon={faGithub} className="nav-icon" />
            </a>
          </div>
        </div>
        <div className="project">
          <img src="/images/project-logos/exchange-logo.png" alt="" />
          <div className="project-info">
            <span>Exchange The Game</span>
            <a href="https://www.exchangethegame.org/">Visit</a>
            <a
              href="https://github.com/GagikManasyan/Exchange-The-Game"
              className="a-github"
            >
              <FontAwesomeIcon icon={faGithub} className="nav-icon" />
            </a>
          </div>
        </div>
        <div className="project">
          <img src="/images/project-logos/manukyan-logo.png" alt="" />
          <div className="project-info">
            <span>Manukyan Photography</span>
            <a href="">Visit</a>
            <a href="" className="a-github">
              <FontAwesomeIcon icon={faGithub} className="nav-icon" />
            </a>
          </div>
        </div>
        <div className="project">
          <img src="" alt="" />
          <div className="project-info">
            <span></span>
            <a href=""></a>
          </div>
        </div>
        <div className="project">
          <img src="" alt="" />
          <div className="project-info">
            <span></span>
            <a href=""></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
