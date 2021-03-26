import React from "react";
import "./Project4.css";
import { Link } from "react-router-dom";

function Project4() {
  return (
    <>
      {" "}
      <div className="project-cursor-prev">
        <Link to="/project3">&laquo;</Link>
      </div>
      <div className="project-cursor-next">
        <Link to="project5">&raquo;</Link>
      </div>
    </>
  );
}

export default Project4;
