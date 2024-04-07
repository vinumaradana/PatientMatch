const data = {
    "Entities": [
        {
            "Id": 48,
            "BeginOffset": 84,
            "EndOffset": 87,
            "Score": 0.7429715394973755,
            "Text": "ed.",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "ADDRESS",
            "Traits": []
        },
        {
            "Id": 15,
            "BeginOffset": 89,
            "EndOffset": 94,
            "Score": 0.8852892518043518,
            "Text": "NSCLC",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": []
        },
        {
            "Id": 16,
            "BeginOffset": 103,
            "EndOffset": 127,
            "Score": 0.4841923415660858,
            "Text": "activating EGFR mutation",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": []
        },
        {
            "Id": 49,
            "BeginOffset": 114,
            "EndOffset": 118,
            "Score": 0.4281895160675049,
            "Text": "EGFR",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 17,
            "BeginOffset": 185,
            "EndOffset": 202,
            "Score": 0.41301411390304565,
            "Text": "evaluable disease",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.6937808394432068
                }
            ]
        },
        {
            "Id": 1,
            "BeginOffset": 329,
            "EndOffset": 340,
            "Score": 0.9962685108184814,
            "Text": "osimertinib",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": []
        },
        {
            "Id": 50,
            "BeginOffset": 366,
            "EndOffset": 385,
            "Score": 0.5613526105880737,
            "Text": "intervening therapy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 2,
            "BeginOffset": 394,
            "EndOffset": 405,
            "Score": 0.9935874938964844,
            "Text": "osimertinib",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": []
        },
        {
            "Id": 3,
            "BeginOffset": 483,
            "EndOffset": 494,
            "Score": 0.980647087097168,
            "Text": "osimertinib",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": []
        },
        {
            "Id": 30,
            "BeginOffset": 536,
            "EndOffset": 541,
            "Score": 0.999994158744812,
            "Text": "prior",
            "Category": "TIME_EXPRESSION",
            "Type": "TIME_TO_TREATMENT_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TREATMENT_NAME",
                    "Score": 0.84610515832901,
                    "RelationshipScore": 0.6000791192054749,
                    "RelationshipType": "OVERLAP",
                    "Id": 51,
                    "BeginOffset": 542,
                    "EndOffset": 564,
                    "Text": "PARP inhibitor therapy",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": [
                        {
                            "Name": "NEGATION",
                            "Score": 0.9120712280273438
                        }
                    ]
                }
            ]
        },
        {
            "Id": 51,
            "BeginOffset": 542,
            "EndOffset": 564,
            "Score": 0.84610515832901,
            "Text": "PARP inhibitor therapy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": [
                {
                    "Name": "NEGATION",
                    "Score": 0.9120712280273438
                }
            ]
        },
        {
            "Id": 52,
            "BeginOffset": 588,
            "EndOffset": 592,
            "Score": 0.6703124642372131,
            "Text": "ECOG",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.8017354011535645,
                    "RelationshipScore": 0.9963957667350769,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 53,
                    "BeginOffset": 629,
                    "EndOffset": 630,
                    "Text": "%",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 18,
            "BeginOffset": 714,
            "EndOffset": 746,
            "Score": 0.7843447327613831,
            "Text": "normal organ and marrow function",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "SIGN",
                    "Score": 0.7447369694709778
                }
            ]
        },
        {
            "Id": 10,
            "BeginOffset": 731,
            "EndOffset": 737,
            "Score": 0.6764068603515625,
            "Text": "marrow",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 54,
            "BeginOffset": 766,
            "EndOffset": 791,
            "Score": 0.9789757132530212,
            "Text": "absolute neutrophil count",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.5362818837165833,
                    "RelationshipScore": 0.9999237060546875,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 55,
                    "BeginOffset": 792,
                    "EndOffset": 802,
                    "Text": "≥1,500/mcL",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.546467125415802,
                    "RelationshipScore": 0.9010022282600403,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 58,
                    "BeginOffset": 821,
                    "EndOffset": 825,
                    "Text": "/mcL",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.5930350422859192,
                    "RelationshipScore": 0.7118088006973267,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 60,
                    "BeginOffset": 839,
                    "EndOffset": 840,
                    "Text": "9",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 56,
            "BeginOffset": 803,
            "EndOffset": 812,
            "Score": 0.5342282056808472,
            "Text": "platelets",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.493532657623291,
                    "RelationshipScore": 0.9999973773956299,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 57,
                    "BeginOffset": 813,
                    "EndOffset": 821,
                    "Text": "≥100,000",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.546467125415802,
                    "RelationshipScore": 0.8047654628753662,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 58,
                    "BeginOffset": 821,
                    "EndOffset": 825,
                    "Text": "/mcL",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 59,
            "BeginOffset": 826,
            "EndOffset": 838,
            "Score": 0.7852692604064941,
            "Text": "hemoglobin ≥",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.5930350422859192,
                    "RelationshipScore": 0.9902288913726807,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 60,
                    "BeginOffset": 839,
                    "EndOffset": 840,
                    "Text": "9",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.9883639812469482,
                    "RelationshipScore": 0.9970716238021851,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 61,
                    "BeginOffset": 841,
                    "EndOffset": 845,
                    "Text": "g/dL",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 62,
            "BeginOffset": 846,
            "EndOffset": 871,
            "Score": 0.5962128639221191,
            "Text": "bilirubin total bilirubin",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.355198472738266,
                    "RelationshipScore": 0.6620522141456604,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 63,
                    "BeginOffset": 872,
                    "EndOffset": 901,
                    "Text": "≤ 1.5 x upper limit of normal",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 19,
            "BeginOffset": 937,
            "EndOffset": 954,
            "Score": 0.9955295324325562,
            "Text": "Gilberts syndrome",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.991682767868042
                },
                {
                    "Name": "HYPOTHETICAL",
                    "Score": 0.7073229551315308
                }
            ]
        },
        {
            "Id": 11,
            "BeginOffset": 958,
            "EndOffset": 963,
            "Score": 0.964588463306427,
            "Text": "liver",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 20,
            "BeginOffset": 958,
            "EndOffset": 974,
            "Score": 0.9874395728111267,
            "Text": "liver metastases",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.9461299180984497
                },
                {
                    "Name": "HYPOTHETICAL",
                    "Score": 0.7287797927856445
                }
            ]
        },
        {
            "Id": 64,
            "BeginOffset": 1006,
            "EndOffset": 1009,
            "Score": 0.8537042140960693,
            "Text": "AST",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.48981305956840515,
                    "RelationshipScore": 0.7564488053321838,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 67,
                    "BeginOffset": 1026,
                    "EndOffset": 1030,
                    "Text": "≤2.5",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 65,
            "BeginOffset": 1016,
            "EndOffset": 1019,
            "Score": 0.6703574061393738,
            "Text": "ALT",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.48981305956840515,
                    "RelationshipScore": 0.826810359954834,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 67,
                    "BeginOffset": 1026,
                    "EndOffset": 1030,
                    "Text": "≤2.5",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 66,
            "BeginOffset": 1020,
            "EndOffset": 1024,
            "Score": 0.6830062866210938,
            "Text": "SGPT",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.48981305956840515,
                    "RelationshipScore": 0.7774487137794495,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 67,
                    "BeginOffset": 1026,
                    "EndOffset": 1030,
                    "Text": "≤2.5",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 12,
            "BeginOffset": 1077,
            "EndOffset": 1082,
            "Score": 0.9904401302337646,
            "Text": "liver",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 21,
            "BeginOffset": 1077,
            "EndOffset": 1093,
            "Score": 0.9124981760978699,
            "Text": "liver metastases",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.8233504891395569
                },
                {
                    "Name": "HYPOTHETICAL",
                    "Score": 0.788698136806488
                }
            ]
        },
        {
            "Id": 69,
            "BeginOffset": 1144,
            "EndOffset": 1156,
            "Score": 0.7389785647392273,
            "Text": "creatinine ≤",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.4056493639945984,
                    "RelationshipScore": 0.9947698712348938,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 70,
                    "BeginOffset": 1157,
                    "EndOffset": 1180,
                    "Text": "1.5 x institutional ULN",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 71,
            "BeginOffset": 1184,
            "EndOffset": 1204,
            "Score": 0.8202106952667236,
            "Text": "creatinine clearance",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.4677901864051819,
                    "RelationshipScore": 0.7348597645759583,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 72,
                    "BeginOffset": 1209,
                    "EndOffset": 1215,
                    "Text": "mL/min",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 73,
            "BeginOffset": 1292,
            "EndOffset": 1304,
            "Score": 0.5467270016670227,
            "Text": "tumor biopsy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.8368275761604309
                }
            ]
        },
        {
            "Id": 4,
            "BeginOffset": 1334,
            "EndOffset": 1345,
            "Score": 0.987622082233429,
            "Text": "osimertinib",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": []
        },
        {
            "Id": 74,
            "BeginOffset": 1401,
            "EndOffset": 1407,
            "Score": 0.7562658190727234,
            "Text": "biopsy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": []
        },
        {
            "Id": 5,
            "BeginOffset": 1471,
            "EndOffset": 1480,
            "Score": 0.9281469583511353,
            "Text": "Niraparib",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": []
        },
        {
            "Id": 6,
            "BeginOffset": 1560,
            "EndOffset": 1569,
            "Score": 0.9797510504722595,
            "Text": "Niraparib",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": []
        },
        {
            "Id": 22,
            "BeginOffset": 1580,
            "EndOffset": 1590,
            "Score": 0.8656203746795654,
            "Text": "fetal harm",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "HYPOTHETICAL",
                    "Score": 0.7986729145050049
                }
            ]
        },
        {
            "Id": 23,
            "BeginOffset": 1614,
            "EndOffset": 1622,
            "Score": 0.8535579442977905,
            "Text": "pregnant",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.8255541324615479
                }
            ]
        },
        {
            "Id": 95,
            "BeginOffset": 1623,
            "EndOffset": 1628,
            "Score": 0.9723053574562073,
            "Text": "woman",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 96,
            "BeginOffset": 1630,
            "EndOffset": 1635,
            "Score": 0.8571573495864868,
            "Text": "Women",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 97,
            "BeginOffset": 1667,
            "EndOffset": 1670,
            "Score": 0.5406789779663086,
            "Text": "men",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 98,
            "BeginOffset": 1857,
            "EndOffset": 1862,
            "Score": 0.9221897721290588,
            "Text": "woman",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 24,
            "BeginOffset": 1870,
            "EndOffset": 1878,
            "Score": 0.9409716725349426,
            "Text": "pregnant",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.9072044491767883
                },
                {
                    "Name": "HYPOTHETICAL",
                    "Score": 0.7806652784347534
                }
            ]
        },
        {
            "Id": 25,
            "BeginOffset": 1897,
            "EndOffset": 1905,
            "Score": 0.9549878835678101,
            "Text": "pregnant",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.9011322259902954
                },
                {
                    "Name": "HYPOTHETICAL",
                    "Score": 0.7449084520339966
                }
            ]
        },
        {
            "Id": 75,
            "BeginOffset": 2117,
            "EndOffset": 2122,
            "Score": 0.6308493614196777,
            "Text": "study",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 7,
            "BeginOffset": 2198,
            "EndOffset": 2207,
            "Score": 0.9796878099441528,
            "Text": "Niraparib",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.5520778894424438
                }
            ]
        },
        {
            "Id": 99,
            "BeginOffset": 2224,
            "EndOffset": 2230,
            "Score": 0.7797896265983582,
            "Text": "Female",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 77,
            "BeginOffset": 2264,
            "EndOffset": 2269,
            "Score": 0.4523254930973053,
            "Text": "urine",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.9454055428504944,
                    "RelationshipScore": 0.9995328187942505,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 76,
                    "BeginOffset": 2255,
                    "EndOffset": 2263,
                    "Text": "negative",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 78,
            "BeginOffset": 2273,
            "EndOffset": 2293,
            "Score": 0.8379051089286804,
            "Text": "serum pregnancy test",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 26,
            "BeginOffset": 2524,
            "EndOffset": 2530,
            "Score": 0.6995095610618591,
            "Text": "menses",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": []
        },
        {
            "Id": 40,
            "BeginOffset": 2535,
            "EndOffset": 2542,
            "Score": 0.5690544247627258,
            "Text": ">1 year",
            "Category": "TIME_EXPRESSION",
            "Type": "TIME_TO_DX_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "DX_NAME",
                    "Score": 0.6995095610618591,
                    "RelationshipScore": 0.5006915330886841,
                    "RelationshipType": "OVERLAP",
                    "Id": 26,
                    "BeginOffset": 2524,
                    "EndOffset": 2530,
                    "Text": "menses",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 27,
            "BeginOffset": 2567,
            "EndOffset": 2579,
            "Score": 0.9443047046661377,
            "Text": "amenorrhoeic",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.5964758992195129
                }
            ],
            "Attributes": [
                {
                    "Type": "ACUITY",
                    "Score": 0.6501200795173645,
                    "RelationshipScore": 0.9997945427894592,
                    "RelationshipType": "ACUITY",
                    "Id": 28,
                    "BeginOffset": 2584,
                    "EndOffset": 2592,
                    "Text": "<2 years",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 79,
            "BeginOffset": 2614,
            "EndOffset": 2626,
            "Score": 0.9843930602073669,
            "Text": "hysterectomy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.8975964784622192
                }
            ]
        },
        {
            "Id": 80,
            "BeginOffset": 2631,
            "EndOffset": 2643,
            "Score": 0.9702885150909424,
            "Text": "oophorectomy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.6467307209968567
                }
            ]
        },
        {
            "Id": 81,
            "BeginOffset": 2724,
            "EndOffset": 2744,
            "Score": 0.7789475917816162,
            "Text": "screening evaluation",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 82,
            "BeginOffset": 2779,
            "EndOffset": 2791,
            "Score": 0.6563218235969543,
            "Text": "oophorectomy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.9165768027305603
                }
            ]
        },
        {
            "Id": 83,
            "BeginOffset": 2796,
            "EndOffset": 2815,
            "Score": 0.524732232093811,
            "Text": "post-tubal ligation",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.7961437702178955
                }
            ]
        },
        {
            "Id": 84,
            "BeginOffset": 2828,
            "EndOffset": 2840,
            "Score": 0.9728399515151978,
            "Text": "hysterectomy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.7407779693603516
                }
            ]
        },
        {
            "Id": 85,
            "BeginOffset": 2844,
            "EndOffset": 2856,
            "Score": 0.9657015204429626,
            "Text": "oophorectomy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.6945818662643433
                }
            ]
        },
        {
            "Id": 86,
            "BeginOffset": 2939,
            "EndOffset": 2949,
            "Score": 0.9141044616699219,
            "Text": "ultrasound",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 13,
            "BeginOffset": 2951,
            "EndOffset": 2956,
            "Score": 0.7006810307502747,
            "Text": "Tubal",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 87,
            "BeginOffset": 2951,
            "EndOffset": 2965,
            "Score": 0.9852889180183411,
            "Text": "Tubal ligation",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": []
        },
        {
            "Id": 88,
            "BeginOffset": 3142,
            "EndOffset": 3151,
            "Score": 0.5819397568702698,
            "Text": "screening",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 89,
            "BeginOffset": 3482,
            "EndOffset": 3493,
            "Score": 0.575305700302124,
            "Text": "medications",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 90,
            "BeginOffset": 3523,
            "EndOffset": 3538,
            "Score": 0.8887801170349121,
            "Text": "corticosteroids",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 91,
            "BeginOffset": 3622,
            "EndOffset": 3638,
            "Score": 0.7299022078514099,
            "Text": "protocol therapy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 92,
            "BeginOffset": 3694,
            "EndOffset": 3699,
            "Score": 0.5777292847633362,
            "Text": "study",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 46,
            "BeginOffset": 3707,
            "EndOffset": 3714,
            "Score": 0.5432636141777039,
            "Text": "90 days",
            "Category": "TIME_EXPRESSION",
            "Type": "TIME_TO_TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_NAME",
                    "Score": 0.5777292847633362,
                    "RelationshipScore": 0.6465487480163574,
                    "RelationshipType": "OVERLAP",
                    "Id": 92,
                    "BeginOffset": 3694,
                    "EndOffset": 3699,
                    "Text": "study",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 93,
            "BeginOffset": 3738,
            "EndOffset": 3753,
            "Score": 0.5706328749656677,
            "Text": "study treatment",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 94,
            "BeginOffset": 3806,
            "EndOffset": 3811,
            "Score": 0.6541450023651123,
            "Text": "study",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 47,
            "BeginOffset": 3819,
            "EndOffset": 3827,
            "Score": 0.9373205304145813,
            "Text": "180 days",
            "Category": "TIME_EXPRESSION",
            "Type": "TIME_TO_TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_NAME",
                    "Score": 0.6541450023651123,
                    "RelationshipScore": 0.5752270221710205,
                    "RelationshipType": "OVERLAP",
                    "Id": 94,
                    "BeginOffset": 3806,
                    "EndOffset": 3811,
                    "Text": "study",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        }
    ],
    "UnmappedAttributes": [
        {
            "Type": "MEDICAL_CONDITION",
            "Attribute": {
                "Type": "QUALITY",
                "Score": 0.9005177617073059,
                "Id": 14,
                "BeginOffset": 65,
                "EndOffset": 73,
                "Text": "stage IV",
                "Category": "MEDICAL_CONDITION",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_VALUE",
                "Score": 0.45837846398353577,
                "Id": 68,
                "BeginOffset": 1134,
                "EndOffset": 1143,
                "Text": "≤ 5 x ULN",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "MEDICAL_CONDITION",
            "Attribute": {
                "Type": "ACUITY",
                "Score": 0.6501200795173645,
                "Id": 28,
                "BeginOffset": 2584,
                "EndOffset": 2592,
                "Text": "<2 years",
                "Category": "MEDICAL_CONDITION",
                "Traits": []
            }
        },
        {
            "Type": "MEDICATION",
            "Attribute": {
                "Type": "ROUTE_OR_MODE",
                "Score": 0.5260813236236572,
                "Id": 8,
                "BeginOffset": 3477,
                "EndOffset": 3481,
                "Text": "oral",
                "Category": "MEDICATION",
                "Traits": []
            }
        },
        {
            "Type": "MEDICATION",
            "Attribute": {
                "Type": "DURATION",
                "Score": 0.4772675633430481,
                "Id": 9,
                "BeginOffset": 3594,
                "EndOffset": 3601,
                "Text": "4 weeks",
                "Category": "MEDICATION",
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
