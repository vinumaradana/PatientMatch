import React, { useState } from "react";
import "./Directory.css";

const ClinicalTrialDirectory = () => {
  // Sample data for clinical trials
  const [clinicalTrials, setClinicalTrials] = useState([
    {
      name: "A Cross-sectional Study Looking at the Effect of Radiotherapy on Carotid Intima-medial Thickness in Head and Neck Cancer",
      location: "City A",
      age: "18+",
      gender: "Either",
      eligibilityCriteria: `
      - Histologically confirmed cancer or benign tumours of the head and neck area treated with hemi-neck radiotherapy to ≥ 50Gy. 
      - Received radiotherapy to the neck area more than 24 months previously. 
      - Intervening neck dissection allowed.
      - Be able to provide written informed consent.
    `
    },
    {
      name: "CARdioprotection in Myocardial Infarction (CARIM)",
      location: "City B",
      age: "18-90 years",
      gender: "Either",
      eligibilityCriteria: `
      - Any patient hospitalized in the cardiology department of the participating center, 
      - Who have signed the Informed Consent Form.
      - Patient having health insurance.
      - Requiring PCI for reperfusion.
      - With a diagnosis of a first MI.
      -  With ST segment elevation and/or Q wave at admission.
      - With troponin elevation.
      - Seen within the first 12 hours after symptom onset.`
    },
    
    {
      name: "Study Evaluating the Safety, Tolerability, Pharmacokinetics, and Pharmacodynamics of SAM-315 in Healthy Japanese Males",
      location: "Ibaraki Pref, Japan",
      age: "20-45 years",
      gender: "Male",
      eligibilityCriteria: `
      - Body mass index (BMI) in the range of 18.5 to 25.0 kg/m2 and body weight ≥ 50 kg (BMI = [weight (kg)]/[height (m)]2).
      - Healthy as determined by the investigator on the basis of medical history, physical examination, clinical laboratory test results, vital signs, and digital 12-lead electrocardiogram (ECG). Alanine aminotransferase (ALT), aspartate aminotransferase (AST) and creatinine levels must be within the upper limit of normal for eligibility`
    },
  ]);


  const renderEligibilityCriteria = (criteria) => {
    // Replace newline characters with <br /> elements
    return criteria.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="directory-container">
      <h1>Clinical Trial Directory</h1>
      <table className="trial-table">
        <thead>
          <tr>
            <th>Research Study</th>
            <th>Location</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Eligibility Criteria</th>
          </tr>
        </thead>
        <tbody>
          {clinicalTrials.map((trial, index) => (
            <tr key={index}>
              <td>{trial.name}</td>
              <td>{trial.location}</td>
              <td>{trial.age}</td>
              <td>{trial.gender}</td>
              <td>{renderEligibilityCriteria(trial.eligibilityCriteria)}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClinicalTrialDirectory;
