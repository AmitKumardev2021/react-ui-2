import {
  faArrowAltCircleUp,
  faDatabase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-scroll/modules";

import React from "react";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <FontAwesomeIcon icon={faDatabase} className="icon" />
            <h2>Secured.</h2>
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}>
            <FontAwesomeIcon icon={faArrowAltCircleUp} className="icon" />
          </Link>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>My Account</h3>
            <p>Login</p>
            <p>My Data</p>
            <p>Cloud Security</p>
            <p>Important</p>
            <p>Specialist</p>
          </div>
          <div className="col">
            <h3>Information</h3>
            <p>MemberShip</p>
            <p>Data Protocols</p>
            <p>Cloud Protocols</p>
            <p>Security Roles</p>
          </div>
          <div className="col">
            <h3>Legal</h3>
            <p>Policies</p>
            <p>Term & Conditions</p>
            <p>Securities</p>
          </div>
          <form>
            <h3>Join Our Team</h3>
            <input type="email" placeholder="Enter your email" />
            <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
            <div className="social-group">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              <FontAwesomeIcon icon={faDribbble} className="social-icon" />
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
