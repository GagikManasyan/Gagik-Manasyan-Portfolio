import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./css/header.css";

const Logo = () => {
  return (
    <img src="/images/samurai-logo.png" alt={"samurai"} className="logo" />
  );
};

const Nav = () => {
  return (
    <nav className="nav-menu">
      <ul>
        <li>
          <a
            href="https://github.com/GagikManasyan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="nav-icon" />
          </a>
        </li>
        <li>
          <a
            href="gagik_manasyan@edu.aua.am"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
