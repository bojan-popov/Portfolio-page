import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const MainPrinter = (props) => {
  return (
    <>
      <div className="main-project">
        <div className="main-navbar">
          <ul className="main-navbar-items">
            <li onClick={props.onAllHandler}>All</li>
            <li onClick={props.onConceptArtHandler}>Concept Art</li>
            <li onClick={props.onMattePaintHandler}>Matte Paint</li>
            <li onClick={props.onShortFilmHandler}>Short Film</li>
          </ul>
        </div>
        {props.project.map((project) => {
          return (
            <div>
              <div key={project.index} className={project.cName}>
                <Link to={project.path}>
                  <img src={project.image} alt={project.imageAlt} />
                </Link>
                <div key={project.index} className={project.cNameDiv}>
                  <h2 className={project.cNameH}>{project.headerText}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MainPrinter;
