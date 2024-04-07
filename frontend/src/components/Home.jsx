import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Sirona Clinical</h1>
      <h2 className="home-subtitle">
        The premier clinical trial matching network
      </h2>

      <Link to="/Reg" className="get-started-link">
        Get Started
      </Link>
    </div>
  );
}

export default Home;
