import React from "react";
import { useState } from 'react';
import "./ChartDrop.css";
import axios from 'axios';

const ChartDrop = () => {
  const [data, setData] = useState('');
  const handleSaveData = () => {
    const submitData = {
      data,
    };
    axios
      .post('http://localhost:5555/patients', submitData)
      .then(() => {
        alert('UR GOOD')
        console.log('yay somethig happened')
      })
      .catch((error) => {
        alert('An error occurered')
        console.log(error);
      });
  };
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
        <input
          type="text"
          className="form-control"
          value={data}
          onChange={(e)=>setData(e.target.value)}
        />
      </div>
      <button
        style={{ backgroundColor: "#89CFF0", color: "#000000" }}
        className="submit-button"
        onClick={handleSaveData}
      >
        Find a match
      </button>
    </div>
  );
}

export default ChartDrop;
