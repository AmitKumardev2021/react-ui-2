import React, { useState } from "react";
import "./NavbarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDatabase, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  return (
    <div name="top" className="navbar">
      <div className="container">
        <div className="logo">
          <FontAwesomeIcon icon={faDatabase} className="icon" />
          <h2>Secured</h2>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recovery">Recovery</Link></li>
        <li><Link to="/cloud">Cloud</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <button>Sign in</button>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FontAwesomeIcon icon={faTimes} className="icon" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
