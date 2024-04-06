import React from "react";
import RegistrationForm from "./Form";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div>
      <h1>We're glad you're here.</h1>
      <p>
        Create an account if you'd like us to recommend matches in the future.
        If not, feel free to
        <Link
          to="/ChartDrop"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          continue as guest.
        </Link>
      </p>
      <RegistrationForm />
    </div>
  );
}

export default Registration;
