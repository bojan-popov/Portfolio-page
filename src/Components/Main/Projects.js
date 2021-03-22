import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

import project1Image1 from "./img/project1-image1.png";
import project2Image1 from "./img/project2-image1.png";
import project3Image1 from "./img/project3-image1.png";
import project4Image1 from "./img/project4-image1.png";
import project5Image1 from "./img/project5-image1.png";
import project6Image1 from "./img/project6-image1.png";

function Projects() {
  return (
    <>
      <div className="main-project">
        <div className="project-navbar">
          <ul className="project-navbar-items">
            <li>All</li>
            <li>Concept Art</li>
            <li>Matte Paint</li>
            <li>Short Film</li>
          </ul>
        </div>
        <div className="project fitImage">
          <Link>
            <img src={project1Image1} alt="projects" />
          </Link>
          <div className="project-new">
            <h2 className="project-header">Project Name</h2>
          </div>
        </div>
        <div className="project fitImage">
          <Link>
            <img src={project2Image1} alt="projects" />
          </Link>
          <div className="project-new">
            <h2 className="project-header">Project Name</h2>
          </div>
        </div>
        <div className="project fitImage">
          <Link>
            <img src={project3Image1} alt="projects" />
          </Link>
          <div className="project-new">
            <h2 className="project-header">Project Name</h2>
          </div>
        </div>
        <div className="project fitImage">
          <Link>
            <img src={project4Image1} alt="projects" />
          </Link>
          <div className="project-new">
            <h2 className="project-header">Project Name</h2>
          </div>
        </div>
        <div className="project fitImage">
          <Link>
            <img src={project5Image1} alt="projects" />
          </Link>
          <div className="project-new">
            <h2 className="project-header">Project Name</h2>
          </div>
        </div>
        <div className="project fitImage">
          <Link>
            <img src={project6Image1} alt="projects" />
          </Link>
          <div className="project-new">
            <h2 className="project-header">Project Name</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
