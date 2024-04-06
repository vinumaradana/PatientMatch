import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to PatientMatch.</h1>
      <h2>The premier clinical trial matching network</h2>
      <button
        className="btn btn-primary"
        style={{ width: "250px", height: "75px", fontSize: "30px" }}
      >
        <Link to="/Reg" style={{ textDecoration: "none", color: "inherit" }}>
          Get Started
        </Link>
      </button>
    </div>
  );
}

export default Home;
