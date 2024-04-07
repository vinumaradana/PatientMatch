// Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"; // Import CSS file for additional styling

const Navigation = () => {
  return (
    <nav className="nav-container">
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
            Host a trial
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
