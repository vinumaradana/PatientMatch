import React from "react";
import { useState } from 'react';
import "./ChartDrop.css";
import axios from "axios";
import { Link } from "react-router-dom";


const ChartDrop = () => {
  const [data, setData] = useState('');
  
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
      .post('http://localhost:5555/patients', submitData)
      .then(() => {
  
        axios.post('http://localhost:5555/matchProcess')
          .then(() => {
            alert('Matching process initiated');
            console.log('Matching process initiated');
          })
          .catch((error) => {
            alert('Error initiating matching process');
            console.log(error);
          });
      
      })
      .catch((error) => {
        alert('An error occurered')
        console.log(error);
      });
  };

  


  return (
    <div className="chart-container">
      <h1>Upload your chart here:</h1>
      <h3>
        Simply copy and paste your medical information in the text box below and we'll match
        you shortly.
      </h3>
     
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
        className="submit-button"
        onClick={handleSaveData}
        > 
      
        <Link to="/Submit" className="submit-link">
        Find a match
        </Link>
      </button> 
      

    </div>
  );
}

export default ChartDrop;
