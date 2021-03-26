import React from "react";
import "./Project3.css";
import { Link } from "react-router-dom";

function Project3() {
  return (
    <>
      <div className="project-cursor-prev">
        <Link to="/project2">&laquo;</Link>
      </div>
      <div className="project-cursor-next">
        <Link to="project4">&raquo;</Link>
      </div>
    </>
  );
}

export default Project3;
