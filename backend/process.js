const data = {
    "Entities": [
        {
            "Id": 2,
            "BeginOffset": 56,
            "EndOffset": 58,
            "Score": 0.812473475933075,
            "Text": "PD",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.8078573346138
                }
            ]
        },
        {
            "Id": 8,
            "BeginOffset": 75,
            "EndOffset": 97,
            "Score": 0.560403048992157,
            "Text": "UK Brain Bank criteria",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "ADDRESS",
            "Traits": []
        },
        {
            "Id": 1,
            "BeginOffset": 78,
            "EndOffset": 83,
            "Score": 0.6541906595230103,
            "Text": "Brain",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 3,
            "BeginOffset": 138,
            "EndOffset": 150,
            "Score": 0.930446207523346,
            "Text": "bradykinesia",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.7063975930213928
                }
            ]
        },
        {
            "Id": 4,
            "BeginOffset": 156,
            "EndOffset": 171,
            "Score": 0.5913801789283752,
            "Text": "sequence effect",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": []
        },
        {
            "Id": 5,
            "BeginOffset": 176,
            "EndOffset": 191,
            "Score": 0.7815020084381104,
            "Text": "motor asymmetry",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": []
        },
        {
            "Id": 9,
            "BeginOffset": 206,
            "EndOffset": 231,
            "Score": 0.8774370551109314,
            "Text": "anti-parkinsonian therapy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": [
                {
                    "Name": "NEGATION",
                    "Score": 0.8116019368171692
                }
            ]
        },
        {
            "Id": 10,
            "BeginOffset": 379,
            "EndOffset": 404,
            "Score": 0.9829444289207458,
            "Text": "anti-parkinsonian therapy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 14,
            "BeginOffset": 450,
            "EndOffset": 454,
            "Score": 0.9535011053085327,
            "Text": "Male",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 11,
            "BeginOffset": 676,
            "EndOffset": 689,
            "Score": 0.3875468671321869,
            "Text": "birth control",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 12,
            "BeginOffset": 705,
            "EndOffset": 715,
            "Score": 0.3100959062576294,
            "Text": "abstinence",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 13,
            "BeginOffset": 717,
            "EndOffset": 726,
            "Score": 0.7940114736557007,
            "Text": "vasectomy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": []
        },
        {
            "Id": 15,
            "BeginOffset": 873,
            "EndOffset": 877,
            "Score": 0.7693239450454712,
            "Text": "male",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 16,
            "BeginOffset": 896,
            "EndOffset": 902,
            "Score": 0.9560332894325256,
            "Text": "female",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        }
    ],
    "UnmappedAttributes": [],
    "ModelVersion": "2.4.0"
}

const entities = data.Entities;

let patientText = '';

// Loop through the Entities array to find the age and gender
entities.forEach(entity => {
    patientText += entity.Text + ' ';
});

// Remove the trailing space from patientText
patientText = patientText.trim();