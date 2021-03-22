import React from "react";
import "./Nav.css";
import logo from "./img/LOGO.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav-main">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="nav-bar">
          <ul className="nav-bar-items">
            <Link to="#">
              <li>Work</li>
            </Link>
            <Link to="#">
              <li>Info</li>
            </Link>
            <Link to="#">
              <li>Mentorship</li>
            </Link>
            <Link to="#">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
