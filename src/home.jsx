import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import "./css/home.css";

const HomeInfo = () => {
  return (
    <div className="home-info">
      <div className="main-info">
        <div className="home-heading">
          <h1>
            Frontend <br></br> Developer.
          </h1>
          <p>
            I am a rising starter in frontend development.I like crafting solid
            and scalable web pages with great user experiences.
          </p>
        </div>
        <AvatarImg />
      </div>
      <div className="foot-info">
        <ul>
          <li>
            <p>If there is a problem, I will find a solution !</p>
          </li>
          <li>
            <p>
              Always ready to learn new skills and technologies to keep up with
              modern standarts of web development.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
const AvatarImg = () => {
  return (
    <div className="avatar-img">
      <img src="/images/avatar-image.jpg" alt="" />
    </div>
  );
};
const MainNavigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <button onClick={() => scrollToSection("container-home")}>
            <span>Home</span>
            <FontAwesomeIcon icon={faDiamond} />
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("container-about")}>
            <span>About</span>
            <FontAwesomeIcon icon={faDiamond} />
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("container-projects")}>
            <span>Projects</span>
            <FontAwesomeIcon icon={faDiamond} />
          </button>
        </li>
      </ul>
    </nav>
  );
};
const Home = () => {
  return (
    <div className="home">
      <HomeInfo />
      <MainNavigation />
    </div>
  );
};
export default Home;
