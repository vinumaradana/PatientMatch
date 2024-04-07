const data = {
    "Entities": [
        {
            "Id": 23,
            "BeginOffset": 4,
            "EndOffset": 6,
            "Score": 0.9994914531707764,
            "Text": "50",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "AGE",
            "Traits": []
        },
        {
            "Id": 24,
            "BeginOffset": 10,
            "EndOffset": 12,
            "Score": 0.9975455403327942,
            "Text": "80",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "AGE",
            "Traits": []
        },
        {
            "Id": 25,
            "BeginOffset": 34,
            "EndOffset": 36,
            "Score": 0.9263157248497009,
            "Text": "50",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "AGE",
            "Traits": []
        },
        {
            "Id": 26,
            "BeginOffset": 41,
            "EndOffset": 43,
            "Score": 0.9863119721412659,
            "Text": "80",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "AGE",
            "Traits": []
        },
        {
            "Id": 48,
            "BeginOffset": 56,
            "EndOffset": 60,
            "Score": 0.9992741942405701,
            "Text": "male",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 49,
            "BeginOffset": 64,
            "EndOffset": 70,
            "Score": 0.9990921020507812,
            "Text": "female",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 7,
            "BeginOffset": 115,
            "EndOffset": 123,
            "Score": 0.6571072936058044,
            "Text": "dementia",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.9517411589622498
                },
                {
                    "Name": "LOW_CONFIDENCE",
                    "Score": 0.7808969616889954
                }
            ]
        },
        {
            "Id": 8,
            "BeginOffset": 160,
            "EndOffset": 179,
            "Score": 0.8087260127067566,
            "Text": "Alzheimer's disease",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.8199544548988342
                }
            ]
        },
        {
            "Id": 27,
            "BeginOffset": 202,
            "EndOffset": 206,
            "Score": 0.9990571141242981,
            "Text": "2011",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "DATE",
            "Traits": []
        },
        {
            "Id": 28,
            "BeginOffset": 311,
            "EndOffset": 333,
            "Score": 0.7841687798500061,
            "Text": "cognitive ability test",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 9,
            "BeginOffset": 376,
            "EndOffset": 387,
            "Score": 0.9110361933708191,
            "Text": "Memory loss",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "SIGN",
                    "Score": 0.506499707698822
                }
            ],
            "Attributes": [
                {
                    "Type": "ACUITY",
                    "Score": 0.45414960384368896,
                    "RelationshipScore": 0.9999395608901978,
                    "RelationshipType": "ACUITY",
                    "Id": 10,
                    "BeginOffset": 408,
                    "EndOffset": 416,
                    "Text": "6 months",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 29,
            "BeginOffset": 494,
            "EndOffset": 505,
            "Score": 0.5355815887451172,
            "Text": "total score",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.39185500144958496,
                    "RelationshipScore": 0.676589846611023,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 31,
                    "BeginOffset": 595,
                    "EndOffset": 598,
                    "Text": "1.0",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 30,
            "BeginOffset": 520,
            "EndOffset": 531,
            "Score": 0.7098121047019958,
            "Text": "Total score",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.39185500144958496,
                    "RelationshipScore": 0.9726616144180298,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 31,
                    "BeginOffset": 595,
                    "EndOffset": 598,
                    "Text": "1.0",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.7234935760498047,
                    "RelationshipScore": 0.8742982149124146,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 32,
                    "BeginOffset": 625,
                    "EndOffset": 628,
                    "Text": "2.0",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 13,
            "BeginOffset": 579,
            "EndOffset": 587,
            "Score": 0.9216932058334351,
            "Text": "dementia",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.8353787064552307
                }
            ],
            "Attributes": [
                {
                    "Type": "QUALITY",
                    "Score": 0.9647268652915955,
                    "RelationshipScore": 1,
                    "RelationshipType": "QUALITY",
                    "Id": 12,
                    "BeginOffset": 574,
                    "EndOffset": 578,
                    "Text": "Mild",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 15,
            "BeginOffset": 609,
            "EndOffset": 617,
            "Score": 0.8921169638633728,
            "Text": "dementia",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.8370071053504944
                }
            ],
            "Attributes": [
                {
                    "Type": "QUALITY",
                    "Score": 0.8787142038345337,
                    "RelationshipScore": 1,
                    "RelationshipType": "QUALITY",
                    "Id": 14,
                    "BeginOffset": 600,
                    "EndOffset": 608,
                    "Text": "Moderate",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 33,
            "BeginOffset": 635,
            "EndOffset": 646,
            "Score": 0.8152204155921936,
            "Text": "total score",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.7234935760498047,
                    "RelationshipScore": 0.743347704410553,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 32,
                    "BeginOffset": 625,
                    "EndOffset": 628,
                    "Text": "2.0",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.46789005398750305,
                    "RelationshipScore": 0.8340862989425659,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 34,
                    "BeginOffset": 654,
                    "EndOffset": 657,
                    "Text": "≤ 4",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 35,
            "BeginOffset": 663,
            "EndOffset": 674,
            "Score": 0.4890323579311371,
            "Text": "total score",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.792854368686676,
                    "RelationshipScore": 0.6506385207176208,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 36,
                    "BeginOffset": 730,
                    "EndOffset": 734,
                    "Text": "≤ 10",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 16,
            "BeginOffset": 757,
            "EndOffset": 770,
            "Score": 0.4900929033756256,
            "Text": "positive sign",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": []
        },
        {
            "Id": 38,
            "BeginOffset": 766,
            "EndOffset": 800,
            "Score": 0.45869436860084534,
            "Text": "sign in nervous system examination",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.792854368686676,
                    "RelationshipScore": 0.705136775970459,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 36,
                    "BeginOffset": 730,
                    "EndOffset": 734,
                    "Text": "≤ 10",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.5101965665817261,
                    "RelationshipScore": 0.9997974038124084,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 37,
                    "BeginOffset": 746,
                    "EndOffset": 765,
                    "Text": "no obvious positive",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 1,
            "BeginOffset": 774,
            "EndOffset": 788,
            "Score": 0.9011441469192505,
            "Text": "nervous system",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 39,
            "BeginOffset": 802,
            "EndOffset": 818,
            "Score": 0.5147979855537415,
            "Text": "Coronal scanning",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 2,
            "BeginOffset": 822,
            "EndOffset": 826,
            "Score": 0.9982837438583374,
            "Text": "head",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 40,
            "BeginOffset": 822,
            "EndOffset": 830,
            "Score": 0.43441566824913025,
            "Text": "head MRI",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.4338102638721466,
                    "RelationshipScore": 0.9188434481620789,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 41,
                    "BeginOffset": 855,
                    "EndOffset": 896,
                    "Text": "MTA grade of medial temporal lobe atrophy",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 3,
            "BeginOffset": 868,
            "EndOffset": 888,
            "Score": 0.9859853982925415,
            "Text": "medial temporal lobe",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 18,
            "BeginOffset": 868,
            "EndOffset": 896,
            "Score": 0.8321090936660767,
            "Text": "medial temporal lobe atrophy",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.5098424553871155
                }
            ],
            "Attributes": [
                {
                    "Type": "SYSTEM_ORGAN_SITE",
                    "Score": 0.9982837438583374,
                    "RelationshipScore": 0.6023389101028442,
                    "RelationshipType": "SYSTEM_ORGAN_SITE",
                    "Id": 2,
                    "BeginOffset": 822,
                    "EndOffset": 826,
                    "Text": "head",
                    "Category": "ANATOMY",
                    "Traits": []
                },
                {
                    "Type": "QUALITY",
                    "Score": 0.5320022106170654,
                    "RelationshipScore": 1,
                    "RelationshipType": "QUALITY",
                    "Id": 17,
                    "BeginOffset": 855,
                    "EndOffset": 864,
                    "Text": "MTA grade",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 19,
            "BeginOffset": 951,
            "EndOffset": 965,
            "Score": 0.7197288870811462,
            "Text": "signal changes",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "SIGN",
                    "Score": 0.5425103306770325
                }
            ],
            "Attributes": [
                {
                    "Type": "SYSTEM_ORGAN_SITE",
                    "Score": 0.6089412569999695,
                    "RelationshipScore": 0.9654581546783447,
                    "RelationshipType": "SYSTEM_ORGAN_SITE",
                    "Id": 4,
                    "BeginOffset": 1010,
                    "EndOffset": 1021,
                    "Text": "hippocampus",
                    "Category": "ANATOMY",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 4,
            "BeginOffset": 1010,
            "EndOffset": 1021,
            "Score": 0.6089412569999695,
            "Text": "hippocampus",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 5,
            "BeginOffset": 1054,
            "EndOffset": 1058,
            "Score": 0.9920582175254822,
            "Text": "head",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 44,
            "BeginOffset": 1059,
            "EndOffset": 1062,
            "Score": 0.7727421522140503,
            "Text": "MRI",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [
                {
                    "Name": "HYPOTHETICAL",
                    "Score": 0.7465226650238037
                }
            ]
        },
        {
            "Id": 45,
            "BeginOffset": 1118,
            "EndOffset": 1127,
            "Score": 0.5919916033744812,
            "Text": "screening",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 46,
            "BeginOffset": 1279,
            "EndOffset": 1295,
            "Score": 0.664639413356781,
            "Text": "coronal MRI scan",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 6,
            "BeginOffset": 1303,
            "EndOffset": 1307,
            "Score": 0.9940657615661621,
            "Text": "head",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 20,
            "BeginOffset": 1706,
            "EndOffset": 1725,
            "Score": 0.9016062617301941,
            "Text": "Alzheimer's Disease",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.8632517457008362
                }
            ]
        },
        {
            "Id": 47,
            "BeginOffset": 1763,
            "EndOffset": 1775,
            "Score": 0.48634225130081177,
            "Text": "Living Scale",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 21,
            "BeginOffset": 1980,
            "EndOffset": 2005,
            "Score": 0.462437242269516,
            "Text": "limited cognitive ability",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "SIGN",
                    "Score": 0.6104072332382202
                }
            ]
        }
    ],
    "UnmappedAttributes": [
        {
            "Type": "MEDICAL_CONDITION",
            "Attribute": {
                "Type": "ACUITY",
                "Score": 0.45414960384368896,
                "Id": 10,
                "BeginOffset": 408,
                "EndOffset": 416,
                "Text": "6 months",
                "Category": "MEDICAL_CONDITION",
                "Traits": []
            }
        },
        {
            "Type": "MEDICAL_CONDITION",
            "Attribute": {
                "Type": "QUALITY",
                "Score": 0.5369125008583069,
                "Id": 11,
                "BeginOffset": 421,
                "EndOffset": 447,
                "Text": "tended to worsen gradually",
                "Category": "MEDICAL_CONDITION",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_VALUE",
                "Score": 0.7072943449020386,
                "Id": 42,
                "BeginOffset": 924,
                "EndOffset": 941,
                "Text": "grade 2 or higher",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_VALUE",
                "Score": 0.5641930103302002,
                "Id": 43,
                "BeginOffset": 951,
                "EndOffset": 986,
                "Text": "signal changes of T2 FLAIR sequence",
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
patientText = patientText.trim();