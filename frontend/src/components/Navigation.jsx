import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"; // Import CSS file for additional styling
import logo from "../assets/SC white.svg";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>
      <div className="nav-right">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Directory" className="nav-link">
              Clinical Trials
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Host" className="nav-link">
              Host a Trial
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
