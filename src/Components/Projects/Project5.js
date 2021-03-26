import React from "react";
import "./Project5.css";
import { Link } from "react-router-dom";

function Project5() {
  return (
    <>
      <div className="project-cursor-prev">
        <Link to="/project4">&laquo;</Link>
      </div>
      <div className="project-cursor-next">
        <Link to="project6">&raquo;</Link>
      </div>
    </>
  );
}

export default Project5;
