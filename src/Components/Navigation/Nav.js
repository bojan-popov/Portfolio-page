import React, { useState } from "react";
import "./Nav.css";
import logo from "./img/LOGO.png";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [sideBar, setSideBar] = useState(false);

  const sideBarHandler = () => setSideBar(!sideBar);
  return (
    <>
      <div className="nav-main">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="nav-bar">
          <div onClick={sideBarHandler}>
            {sideBar ? (
              <FaWindowClose className="nav-burger" />
            ) : (
              <FaBars className="nav-burger" />
            )}
          </div>
          <ul
            className="nav-bar-items"
            onClick={sideBarHandler}
            id={sideBar ? "hidden" : ""}
          >
            <NavLink to="/home" activeClassName="active">
              <li>Work</li>
            </NavLink>
            <NavLink to="info">
              <li>Info</li>
            </NavLink>
            <NavLink to="mentorship">
              <li>Mentorship</li>
            </NavLink>
            <NavLink to="contact">
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
