import React from "react";
import "./Project6.css";
import { Link } from "react-router-dom";

function Project6() {
  return (
    <>
      <div className="project-cursor-prev">
        <Link to="/project5">&laquo;</Link>
      </div>
      <div className="project-cursor-next">
        <Link to="project1">&raquo;</Link>
      </div>
    </>
  );
}

export default Project6;
