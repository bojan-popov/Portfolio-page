import React from "react";
import "./Project1.css";
import project1img1 from "./img/project1-image1.png";
import project1img2 from "./img/project1-image2.png";
import project1img3 from "./img/project1-image3.png";
import project1img4 from "./img/project1-image4.png";
import { Link } from "react-router-dom";

function Project1() {
  return (
    <div className="project1">
      <div className="img-container-1">
        <img src={project1img1} alt="project"></img>
        <img src={project1img2} alt="project"></img>
        <img src={project1img3} alt="project"></img>
        <img src={project1img4} alt="project"></img>
      </div>
      <div className="text-area-1">
        <h2>Project info</h2>
        <p>
          isumm lorem asta la vista isumm lorem asta la vista isumm lorem asta
          la vista isumm lorem asta la vista isumm lorem asta la vista isumm
          lorem asta la vista isumm lorem asta la vista isumm lorem asta la
          vista isumm lorem asta la vista isumm lorem asta la vista isumm lorem
          asta la vista
        </p>
        <h4>Date</h4>
        <p>ipsum lorem data</p>
      </div>
      <div className="project-cursor-prev">
        <Link to="/project6">&laquo;</Link>
      </div>
      <div className="project-cursor-next">
        <Link to="project2">&raquo;</Link>
      </div>
    </div>
  );
}

export default Project1;
