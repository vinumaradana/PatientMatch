// import React from "react";
// import { Link } from "react-router-dom";
// import "./Registration.css";

// function Registration() {
//   return (
//     <div className="reg-container">
//       <h1>We're glad you're here.</h1>
//       <h3>
//         Create an account if you'd like us to recommend matches in the future.
//         If not, feel free to{" "}
//         <Link
//           to="/ChartDrop"
//           style={{ textDecoration: "underline", color: "#89CFF0" }}
//         >
//           continue as guest.
//         </Link>
//       </h3>
//       <h3 className="input-group-label">Email:</h3>
//       <input className="input-group-input"></input>
//       <h3 className="input-group-label">Password:</h3>
//       <input className="input-group-input"></input>

//         <Link
//           to="/ChartDrop"
//           className="register-link"
//         >
//           Register
//         </Link>
//     </div>
//   );
// }

// export default Registration;

import React from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

function Registration() {
  return (
    <div className="reg-container">
      <h1 className="registration-title">We're glad you're here.</h1>
      <h3 className="registration-description">
        Create an account if you'd like us to recommend matches in the future.
        If not, feel free to{" "}
        <Link to="/ChartDrop" className="guest-link">
          continue as a guest.
        </Link>
      </h3>
      <div className="input-group">
        <label htmlFor="email" className="input-group-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="input-group-input"
          placeholder="Enter your email"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password" className="input-group-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="input-group-input"
          placeholder="Enter your password"
        />
      </div>
      <Link to="/ChartDrop" className="register-link">
        Register
      </Link>
    </div>
  );
}

export default Registration;
