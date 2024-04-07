import React from "react";
import "./ChartDrop.css";

function Host() {
  return (
    <div className="chart-container">
      <h1>Upload clinical trial details here:</h1>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"></span>
        </div>
        <textarea
          class="form-control"
          aria-label="With textarea"
          rows="10"
          cols="110"
          style={{
            resize: "none", // Disable textarea resizing
            borderRadius: "6px", // Rounded corners
            border: "1px solid #ccc", // Light gray border
            padding: "10px", // Padding inside the textarea
            fontSize: "16px", // Font size
            lineHeight: "1.5", // Line height for readability
            width: "100%", // Full width
            boxSizing: "border-box", // Include padding and border in the width
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Shadow for depth
            transition: "border-color 0.3s ease", // Smooth border color transition
          }}
          
        ></textarea>
      </div>

      <button
        style={{ backgroundColor: "#0d9eff", color: "#000000" }}
        className="submit-button"
      >
        Publish
      </button>
    </div>
  );
}

export default Host;
