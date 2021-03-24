import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaVimeoSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer-main">
        <ul className="footer-icons">
          <li>
            <a
              href="https://facebook.com"
              target="blanc"
              className="footer-icon-links"
            >
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="blanc"
              className="footer-icon-links"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://vimeo.com"
              target="blanc"
              className="footer-icon-links"
            >
              <FaVimeoSquare />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="blanc"
              className="footer-icon-links"
            >
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
        <div className="footer-copyright">
          <h2>copyrights Bojan Popov</h2>
        </div>
      </div>
    </>
  );
}

export default Footer;
