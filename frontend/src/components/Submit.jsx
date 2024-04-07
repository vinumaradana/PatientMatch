import React from "react";
import { useLocation } from "react-router-dom";
import "./Submit.css"; // Import CSS file for styling

function Submit() {
  const location = useLocation(); // Get the location object from React Router
  const { similarIds } = location.state || {}; // Extract similarIds from location.state, default to empty array if not available

  return (
    <div className="submit-container">
      <h1 className="submit-heading">Thank you for your submission</h1>
      <h3 className="submit-message">Finding you matches...</h3>
      <div className="similar-ids-container">
        <h3>Similar IDs:</h3>
        <ul>
          {similarIds &&
            similarIds.map((id) => (
              <li key={id}>{id}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Submit;
