import React, { useState } from "react";
import "./Directory.css";

const ClinicalTrialDirectory = () => {
  // Sample data for clinical trials
  const [clinicalTrials, setClinicalTrials] = useState([
    {
      name: "Efficacy and Safety of Wei Li Bai Capsules in the Treatment of Alzheimer's Diseases",
      location: "China",
      age: "50-80 years",
      gender: "Either",
      eligibilityCriteria: `
      - Meet the diagnostic criteria of "likely ad dementia" of the National Institute on aging Alzheimer's disease association (NIA-AA) (2011)
      - The subjects are primary school graduates / graduates and above, and have the ability to complete the cognitive ability test and other tests specified in the program
      - Memory loss lasted for at least 6 months and tended to worsen gradually
      - Subjects with mild or moderate illness: 11 ≤ total score of MMSE ≤ 26
      - Total score of Clinical Dementia Rating Scale (CDR)
      - Mild dementia: CDR = 1.0; Moderate dementia: CDR = 2.0
      - The total score of HIS ≤ 4
      - The total score of Hamilton Depression Scale (HAMD 17 item version) is ≤ 10
      - There was no obvious positive sign in nervous system examination
      - The subjects should have stable and reliable caregivers, who will take care of them at least 3 days a week and at least 4 hours a day. The caregivers will accompany the subjects to participate in the whole process of the study. Caregivers must accompany the subjects to the study visit and assist the investigator in completing the Neuropsychiatric Inventory (NPI), Alzheimer's Disease Collaborative Study-Ability of Daily Living Scale (ADCS-ADL), and Clinician Interview Based Impression of Severity (CIBIC -plus), and other scale scores
      - Agree to participate and sign the informed consent form by the legal guardian. Due to the subject's limited cognitive ability and other reasons, the subject's signature is allowed to be left blank, and the reason is explained. In addition, the legal guardian shall sign the reason statement, and the legal guardian shall sign the informed consent.
    `
    },
    {
      name: "A Randomized, Double-Blind, Placebo-Controlled Trial of IkT-148009 in Untreated Parkinson's Disease",
      location: "United States",
      age: "30-80 years",
      gender: "Either",
      eligibilityCriteria: `
      - Participants who are diagnosed with PD consistent with UK Brain Bank criteria and MDS Research Criteria; must include bradykinesia with sequence effect and motor asymmetry.
      - Receiving no anti-parkinsonian therapy
      - Modified Hoehn/Yahr Stage < 3.0
      - Montreal Cognitive Assessment ≥ 24
      - Patient expected to be able to participate in trial without need for additional anti-parkinsonian therapy
      - Approved as an appropriate and suitable candidate by the EAC.`
    },
    
    {
      name: "Phase 2a Study to Assess the Efficacy and Safety of AZD4604 in Adult Patients With Moderate-to-Severe Asthma Uncontrolled on Medium-High Dose ICS-LABA (AJAX)",
      location: "Argentina",
      age: "18-80 years",
      gender: "Either",
      eligibilityCriteria: `
      - Treated with medium-high dose ICS in combination with LABA at a stable dose for at least 3 months prior to Visit 1.
      - Documented history of ≥ 1 severe asthma exacerbation within 1 year prior to Visit 1.
      - Morning pre-BD FEV1 between ≥ 40% and ≤ 90% predicted at Visit 1 and Visit 3.
      - Able to perform acceptable lung function testing for FEV1 according to ATS/ERS 2019 acceptability criteria.
      - Documented evidence of asthma in the 10 years up to or including Visit 1.
      - An ACQ-6 score ≥ 1.5 at Visit 1 and at Visit 3.
      - Body weight of ≥ 40 kg and body mass index of < 35 kg/m2. 10. Male and/or female: Contraceptive use by males or females should be consistent with local regulations regarding the methods of contraception for those participating in clinical studies. At the end of the Run-in period (Visit 3), participants must fulfil the following additional criteria in order to be randomised into the study and enter the Treatment period:
      - Pre-BD FEV1 between ≥ 40% and ≤ 90% predicted.
      - A pre-BD/pre-IMP dose FEV1 at Visit 3 that has not increased or decreased by 20% or more from the pre-BD FEV1 recorded at Visit 1 and at Visit 2.
      - An ACQ-6 score of ≥ 1.5.
      - At least 80% compliance with usual asthma background medication during Run-in period (from Visit 2 to Visit 3) based on the daily asthma ePROs.
      - Minimum 80% compliance with daily eCOAs (electronic Clinical Outcome Assessments) during the Run-in period and during the 14 days preceding Visit 3.
      - For female participants, a negative urine pregnancy test prior to administration of IMP.`
    },

    {
      name: "Niraparib in Combination With Osimertinib in EGFR-Mutated Advanced Lung Cancer",
      location: "United States",
      age: "18 years or older",
      gender: "Either",
      eligibilityCriteria: `
      - Participants must have histologically or cytologically confirmed stage IV (AJCC 8th ed.) NSCLC with an activating EGFR mutation as identified in a CLIA-approved laboratory.
      - Presence of evaluable disease, either measure or non-measurable, in accordance with RECIST 1.1 criteria.
      - Participants must have had clinical progression on osimertinib at any prior time, i.e., intervening therapy between osimertinib and study enrollment is allowed.
      - Participants must have access to commercial osimertinib.
      - Participants must not have received any prior PARP inhibitor therapy.
      - ECOG performance status ≤1 (Karnofsky ≥70%, see Appendix A).
      - Life expectancy of greater than 6 months.
      - Participants must have normal organ and marrow function as defined below
      - Participants must have undergone a prior tumor biopsy upon clinical progression on osimertinib. If it was not feasible or medically safe to undergo a biopsy a patient may enroll with permission of the PI.
      - The effects of Niraparib on the developing human fetus are unknown but based on its mechanism of action Niraparib may cause fetal harm when administered to a pregnant woman. Women of child-bearing potential and men must agree to use adequate contraception (hormonal or barrier method of birth control; abstinence) prior to study entry through 180 days after the last dose of study treatment. Should a woman become pregnant or suspect she is pregnant while she or her partner is participating in this study, she should inform her treating physician immediately. Men treated or enrolled on this protocol must also agree to use adequate contraception prior to the study, for the duration of study participation, and 4 months after completion of Niraparib administration.
      - Female participant must have a negative urine or serum pregnancy test within 7 days prior to taking study treatment if of childbearing potential, or is of nonchildbearing potential. Nonchildbearing potential is defined as follows (by other than medical reasons): --≥ 45 years of age and has not had menses for >1 year
      - Ability to take oral medications whole.
      - Participant receiving corticosteroids may continue as long as their dose is stable for least 4 weeks prior to initiating protocol therapy.
      - Participant must agree to not donate blood during the study or for 90 days after the last dose of study treatment
      - Participant must agree not to breastfeed during the study or for 180 days after the last dose of study treatment.
      - Ability to understand and the willingness to sign a written informed consent document.`
    },
    {
      name: "Radiation, Immunotherapy and PARP Inhibitor in Triple Negative Breast Cancer (NADiR)",
      location: "United States",
      age: "18 years or older",
      gender: "Either",
      eligibilityCriteria: `
        - ECOG performance status ≤ 1
        - Histologically or cytologically-confirmed TNBC (ER <1%, PR <1%, HER-2-neu 0-1+ by IHC or non-FISH-amplified63. ER-low, PR-low (defined as ER and/or PR 1-10%) and HER2-negative patients may also be eligible, as per treating MD discretion).
        - Metastatic or recurrent TNBC.
        - Prior progression on immune-checkpoint inhibitor and/or PDL1-negative. Note: PDL1-status may be determined on tissues from either primary or mTNBC. PD-L1 status must be determined by an FDA-approved assay approved for breast cancer, such as PharmDx IHC (22C3) for pembrolizumab, Ventana (SP142) for atezolizumab
        - No more than 2 prior lines of systemic therapy for inoperable/recurrent or metastatic disease.
          Note: Prior line of systemic therapy includes targeted or biologic agents in combination or the absence of chemotherapy
        - Radiation is clinically indicated for local control or palliation.
        - At least one tumor for which RT is considered clinically appropriate.
        - At least one radiographically-confirmed metastases index lesion that will not undergo RT and is measurable based on RECIST v1.1.
        - Prior therapy with targeted agents or other forms of immunotherapy is allowed
        - Prior RT is permitted, provided the treating radiation oncologist deems that study RT treatment planning guidelines can be achieved.
        - Available archived tumor tissue of a metastatic tumor collected up to 28 days prior to registration. If archival tissue is unavailable, participant willingness to provide tissue from a newly obtained core or excisional biopsy of a tumor lesion. Newly-obtained is defined as a specimen obtained up to 28 days prior to study registration.`
    }
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
