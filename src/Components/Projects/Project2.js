import React from "react";
import "./Project2.css";
import { Link } from "react-router-dom";

function Project2() {
  return (
    <>
      <div className="project">Proekt 2</div>;
      <div className="project-cursor-prev">
        <Link to="/project1">&laquo;</Link>
      </div>
      <div className="project-cursor-next">
        <Link to="project3">&raquo;</Link>
      </div>
    </>
  );
}

export default Project2;
