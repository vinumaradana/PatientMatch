const data = {
    "Entities": [
        {
            "Id": 16,
            "BeginOffset": 21,
            "EndOffset": 23,
            "Score": 0.941476583480835,
            "Text": "18",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "AGE",
            "Traits": []
        },
        {
            "Id": 1,
            "BeginOffset": 153,
            "EndOffset": 157,
            "Score": 0.7861669659614563,
            "Text": "LABA",
            "Category": "MEDICATION",
            "Type": "BRAND_NAME",
            "Traits": []
        },
        {
            "Id": 6,
            "BeginOffset": 248,
            "EndOffset": 267,
            "Score": 0.9735763669013977,
            "Text": "asthma exacerbation",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.8738674521446228
                }
            ],
            "Attributes": [
                {
                    "Type": "QUALITY",
                    "Score": 0.8173881769180298,
                    "RelationshipScore": 1,
                    "RelationshipType": "QUALITY",
                    "Id": 5,
                    "BeginOffset": 241,
                    "EndOffset": 247,
                    "Text": "severe",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 18,
            "BeginOffset": 315,
            "EndOffset": 319,
            "Score": 0.5129831433296204,
            "Text": "FEV1",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.5802169442176819,
                    "RelationshipScore": 0.8754072189331055,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 19,
                    "BeginOffset": 330,
                    "EndOffset": 332,
                    "Text": "40",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.8311154842376709,
                    "RelationshipScore": 0.8643049001693726,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 20,
                    "BeginOffset": 332,
                    "EndOffset": 333,
                    "Text": "%",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.36066150665283203,
                    "RelationshipScore": 0.6986730098724365,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 21,
                    "BeginOffset": 340,
                    "EndOffset": 342,
                    "Text": "90",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.7513391375541687,
                    "RelationshipScore": 0.8727954626083374,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 22,
                    "BeginOffset": 342,
                    "EndOffset": 343,
                    "Text": "%",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 4,
            "BeginOffset": 405,
            "EndOffset": 409,
            "Score": 0.9450854659080505,
            "Text": "lung",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 23,
            "BeginOffset": 405,
            "EndOffset": 426,
            "Score": 0.8235635757446289,
            "Text": "lung function testing",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 24,
            "BeginOffset": 431,
            "EndOffset": 445,
            "Score": 0.43979308009147644,
            "Text": "FEV1 according",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.36066150665283203,
                    "RelationshipScore": 0.7842245697975159,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 21,
                    "BeginOffset": 340,
                    "EndOffset": 342,
                    "Text": "90",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 17,
            "BeginOffset": 457,
            "EndOffset": 461,
            "Score": 0.9191638231277466,
            "Text": "2019",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "DATE",
            "Traits": []
        },
        {
            "Id": 7,
            "BeginOffset": 509,
            "EndOffset": 515,
            "Score": 0.9938201308250427,
            "Text": "asthma",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.9162111878395081
                }
            ]
        },
        {
            "Id": 25,
            "BeginOffset": 563,
            "EndOffset": 574,
            "Score": 0.9358026385307312,
            "Text": "ACQ-6 score",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.5482741594314575,
                    "RelationshipScore": 0.7777327299118042,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 26,
                    "BeginOffset": 575,
                    "EndOffset": 580,
                    "Text": "≥ 1.5",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 28,
            "BeginOffset": 611,
            "EndOffset": 622,
            "Score": 0.8990989923477173,
            "Text": "Body weight",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.4281556010246277,
                    "RelationshipScore": 0.8739156723022461,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 29,
                    "BeginOffset": 626,
                    "EndOffset": 630,
                    "Text": "≥ 40",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.7510725259780884,
                    "RelationshipScore": 0.5995768904685974,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 30,
                    "BeginOffset": 631,
                    "EndOffset": 633,
                    "Text": "kg",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 31,
            "BeginOffset": 638,
            "EndOffset": 653,
            "Score": 0.9798519015312195,
            "Text": "body mass index",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.4169347584247589,
                    "RelationshipScore": 0.9996626377105713,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 32,
                    "BeginOffset": 657,
                    "EndOffset": 671,
                    "Text": "< 35 kg/m2. 10",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 47,
            "BeginOffset": 673,
            "EndOffset": 677,
            "Score": 0.9873303174972534,
            "Text": "Male",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 48,
            "BeginOffset": 685,
            "EndOffset": 691,
            "Score": 0.9938626289367676,
            "Text": "female",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 49,
            "BeginOffset": 723,
            "EndOffset": 730,
            "Score": 0.9449765682220459,
            "Text": "females",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 33,
            "BeginOffset": 1036,
            "EndOffset": 1047,
            "Score": 0.3741922676563263,
            "Text": "Pre-BD FEV1",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.3886106312274933,
                    "RelationshipScore": 0.5608716607093811,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 34,
                    "BeginOffset": 1056,
                    "EndOffset": 1060,
                    "Text": "≥ 40",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 42,
            "BeginOffset": 1232,
            "EndOffset": 1243,
            "Score": 0.95319002866745,
            "Text": "ACQ-6 score",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.8464376926422119,
                    "RelationshipScore": 0.8388867378234863,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 43,
                    "BeginOffset": 1247,
                    "EndOffset": 1252,
                    "Text": "≥ 1.5",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 44,
            "BeginOffset": 1289,
            "EndOffset": 1317,
            "Score": 0.5793082118034363,
            "Text": "asthma background medication",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 3,
            "BeginOffset": 1391,
            "EndOffset": 1396,
            "Score": 0.723639190196991,
            "Text": "ePROs",
            "Category": "MEDICATION",
            "Type": "BRAND_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "FREQUENCY",
                    "Score": 0.5429397821426392,
                    "RelationshipScore": 0.9548437595367432,
                    "RelationshipType": "FREQUENCY",
                    "Id": 2,
                    "BeginOffset": 1378,
                    "EndOffset": 1383,
                    "Text": "daily",
                    "Category": "MEDICATION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 50,
            "BeginOffset": 1551,
            "EndOffset": 1557,
            "Score": 0.8453495502471924,
            "Text": "female",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 46,
            "BeginOffset": 1583,
            "EndOffset": 1603,
            "Score": 0.9908876419067383,
            "Text": "urine pregnancy test",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.9823316335678101,
                    "RelationshipScore": 0.9869045615196228,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 45,
                    "BeginOffset": 1574,
                    "EndOffset": 1582,
                    "Text": "negative",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        }
    ],
    "UnmappedAttributes": [
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_VALUE",
                "Score": 0.427808552980423,
                "Id": 27,
                "BeginOffset": 605,
                "EndOffset": 606,
                "Text": "3",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_UNIT",
                "Score": 0.6200885772705078,
                "Id": 35,
                "BeginOffset": 1060,
                "EndOffset": 1061,
                "Text": "%",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_VALUE",
                "Score": 0.46988195180892944,
                "Id": 36,
                "BeginOffset": 1068,
                "EndOffset": 1070,
                "Text": "90",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_UNIT",
                "Score": 0.5162850618362427,
                "Id": 37,
                "BeginOffset": 1070,
                "EndOffset": 1071,
                "Text": "%",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_VALUE",
                "Score": 0.8998753428459167,
                "Id": 38,
                "BeginOffset": 1119,
                "EndOffset": 1120,
                "Text": "3",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_VALUE",
                "Score": 0.4996269643306732,
                "Id": 39,
                "BeginOffset": 1134,
                "EndOffset": 1156,
                "Text": "increased or decreased",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_UNIT",
                "Score": 0.5664039254188538,
                "Id": 40,
                "BeginOffset": 1162,
                "EndOffset": 1163,
                "Text": "%",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_VALUE",
                "Score": 0.6762357354164124,
                "Id": 41,
                "BeginOffset": 1226,
                "EndOffset": 1227,
                "Text": "2",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        }
    ],
    "ModelVersion": "2.4.0"
}

const entities = data.Entities;

let patientText = '';

// Loop through the Entities array to find the age and gender
entities.forEach(entity => {
    patientText += entity.Text + ' ';
});

// Remove the trailing space from patientText
console.log(patientText)
