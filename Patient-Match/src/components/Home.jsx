import React from "react";

function Home() {
  return (
    <>
      <h1>Welcome to PatientMatch.</h1>
      <h2>The premier clinical trial matching network</h2>
      <button className="btn btn-primary" color="primary">
        <Link to="/second" style={{ textDecoration: "none", color: "inherit" }}>
          Get Started
        </Link>
      </button>
    </>
  );
}

export default Home;
