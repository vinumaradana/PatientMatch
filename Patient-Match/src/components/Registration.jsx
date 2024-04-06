import React from "react";
import RegistrationForm from "./Form";
import { Link } from "react-router-dom";
import "./Registration.css";

function Registration() {
  return (
    <div className="reg-container">
      <h1>We're glad you're here.</h1>
      <h3>
        Create an account if you'd like us to recommend matches in the future.
        If not, feel free to{" "}
        <Link
          to="/ChartDrop"
          style={{ textDecoration: "underline", color: "#89CFF0" }}
        >
          continue as guest.
        </Link>
      </h3>
      <h3 className="input-group-label">email:</h3>
      <input className="input-group-input"></input>
      <h3 className="input-group-label">password:</h3>
      <input className="input-group-input"></input>
      <button className="reg-button">Register</button>
    </div>
  );
}

export default Registration;
