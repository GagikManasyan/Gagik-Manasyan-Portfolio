import React from "react";
import "./css/fonts.css";
import "./css/index.css";
import Header from "./header";
import Home from "./home";
import About from "./about";
import Projects from "./projects";

const HomeContainer = () => {
  return (
    <section className="container" id="container-home">
      <Header />
      <Home />
    </section>
  );
};
const AboutContainer = () => {
  return (
    <section className="container" id="container-about">
      <About />
    </section>
  );
};
const ProjectsContainer = () => {
  return (
    <section className="container" id="container-projects">
      <Projects />
    </section>
  );
};
const App = () => {
  return (
    <div className="page">
      <HomeContainer />
      <AboutContainer />
      <ProjectsContainer />
    </div>
  );
};

export default App;
