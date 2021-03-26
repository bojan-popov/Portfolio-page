import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";
import "./Main.css";

const MainPrinter = (props) => {
  return (
    <>
      <div className="main-project">
        <div className="main-navbar">
          <ul className="main-navbar-items">
            <li onClick={props.onAllHandler}>
              <button className="button">All</button>
            </li>
            <li onClick={props.onConceptArtHandler}>
              <button>Concept Art</button>
            </li>
            <li onClick={props.onMattePaintHandler}>
              <button className="button">Matte Paint</button>
            </li>
            <li onClick={props.onShortFilmHandler}>
              <button className="button">Short Film</button>
            </li>
          </ul>
        </div>
        {props.project.map((project) => {
          return (
            <div key={project.key}>
              <div className={project.cName}>
                <Link to={project.path}>
                  <img src={project.image} alt={project.imageAlt} />
                </Link>
                <div className={project.cNameDiv}>
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
