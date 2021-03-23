import React, { useState } from "react";
import "./Nav.css";
import logo from "./img/LOGO.png";
import { Link } from "react-router-dom";

function Nav() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <div className="nav-main">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-bar">
          <button onClick={() => setSideBar(!sideBar)}>Open</button>
          <ul className="nav-bar-items" id={sideBar ? "hidden" : ""}>
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
