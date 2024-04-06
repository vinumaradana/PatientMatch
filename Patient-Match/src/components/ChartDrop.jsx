import React from "react";
import "./ChartDrop.css";

function ChartDrop() {
  return (
    <div className="chart-container">
      <h1>Upload your chart here:</h1>
      <h2>
        Simply copy and paste your chart in the text box below and we'll match
        you shortly.
      </h2>
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
        Find a match
      </button>
    </div>
  );
}

export default ChartDrop;
