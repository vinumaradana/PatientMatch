// components/RegistrationForm.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="input-group-label">
        Email:
        <input
          className="input-group-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label className="input-group-label">
        Password:
        <input
          className="input-group-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">
        <Link
          to="/ChartDrop"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Register
        </Link>
      </button>
    </form>
  );
}

export default RegistrationForm;
