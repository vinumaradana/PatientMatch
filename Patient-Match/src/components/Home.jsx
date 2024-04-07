

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to PatientMatch</h1>
      <h2>The premier clinical trial matching network</h2>

      <Link to="/Reg" className="get-started-link">
      

        Get Started
      </Link>
    </div>
  );
}

export default Home;