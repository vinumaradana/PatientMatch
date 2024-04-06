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
          cols="150"
        ></textarea>
      </div>
      <button
        style={{ backgroundColor: "#89CFF0", color: "#000000" }}
        className="submit-button"
      >
        Publish
      </button>
    </div>
  );
}

export default Host;
