import React, { useState, useEffect } from "react";
import "./ChartDrop.css";
import axios from "axios";

const ChartDrop = () => {
  const [data, setData] = useState("");
  const [similarIds, setSimilarIds] = useState([]);
  const [similarityScores, setSimilarityScores] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    // Fetch documents when similarIds change
    fetchDocuments();
  }, [similarIds]);

  const fetchDocuments = () => {
    // Reset documents state and setLoading to true
    setDocuments([]);
    setLoading(true);

    // Iterate over each similar ID and fetch the corresponding document
    similarIds.forEach((id) => {
      axios
        .get(`http://localhost:5555/clinicals/${id}`)
        .then((response) => {
          // Add the fetched document to the documents state
          setDocuments((prevDocuments) => [...prevDocuments, response.data]);
        })
        .catch((error) => {
          console.error("Error fetching document:", error);
        })
        .finally(() => {
          // Set loading to false after all documents are fetched
          setLoading(false);
        });
    });
  };

  const handleSaveData = () => {
    const submitData = { data };

    axios
      .post("http://localhost:5555/patients", submitData)
      .then(() => {
        axios
          .post("http://localhost:5555/matchProcess")
          .then((response) => {
            console.log("Matching process initiated");
            const { similarIds, similarityScore } = response.data;
            setSimilarIds(similarIds);
            setSimilarityScores(similarityScore);
          })
          .catch((error) => {
            alert("Error initiating matching process");
            console.error(error);
          });
      })
      .catch((error) => {
        alert("An error occurred");
        console.error(error);
      });
  };

  return (
    <div className="chart-container">
      <h1>Upload your chart here:</h1>
      <h3>
        Simply copy and paste your medical information in the text box below and
        we'll match you shortly.
      </h3>

      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"></span>
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
        Find a match
      </button>

      {/* Conditionally render documents information */}
      {loading ? (
        <p></p>
      ) : (
        <div>
          <h1>Your Matches</h1>
          {documents.map((document, index) => (
            <div key={document._id}>
              <h2>{document.data.title}</h2>
              <p><strong>Condition:</strong> {document.data.condition}</p>
              <p><strong>Start Date:</strong> {document.data.start_date}</p>
              <p><strong>Location:</strong> {document.data.location}</p>
              <p><strong>Brief Summary:</strong> {document.data.brief_summary}</p>
              <p><strong>Similarity Score:</strong> {similarityScores[index]}</p>
              <div className="similarity-bar">
                <div
                  className="similarity-bar-inner"
                  style={{ width: `${similarityScores[index] * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChartDrop;
