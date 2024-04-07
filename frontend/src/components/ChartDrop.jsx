import React from "react";
import { useState } from "react";
import "./ChartDrop.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ChartDrop = () => {
  const [data, setData] = useState("");

  // const handleSaveData = () => {
  //   const submitData = {
  //     data,
  //   };
  //   axios
  //     .post('http://localhost:5555/patients', submitData)
  //     .then(() => {
  //       var id = submitData._id
  //       console.log("hello" + id);
  //       alert('Matching process initiated');
  //       console.log('Matching process initiated');

  //     })
  //     .catch((error) => {
  //       alert('An error occurered')
  //       console.log(error);
  //     });
  // };

  const handleSaveData = () => {
    const submitData = {
      data,
    };
    axios
      .post("http://localhost:5555/patients", submitData)
      .then(() => {
        axios
          .post("http://localhost:5555/matchProcess")
          .then(() => {
            alert("Matching process initiated");
            console.log("Matching process initiated");
          })
          .catch((error) => {
            alert("Error initiating matching process");
            console.log(error);
          });
      })
      .catch((error) => {
        alert("An error occurered");
        console.log(error);
      });
  };

  return (
    <div className="chart-container">
      <h1>Upload your chart here:</h1>
      <h3>
        Simply copy and paste your medical information in the text box below and
        we'll match you shortly.
      </h3>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"></span>
        </div>
        <textarea
          type="text"
          className="form-control"
          value={data}
          onChange={(e) => setData(e.target.value)}
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
        />
      </div>

      <button className="submit-button" onClick={handleSaveData}>
        <Link to="/Submit" className="submit-link">
          Find a match
        </Link>
      </button>
    </div>
  );
};

export default ChartDrop;
