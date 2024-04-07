const data = {
    "Entities": [
        {
            "Id": 56,
            "BeginOffset": 6,
            "EndOffset": 8,
            "Score": 0.1559714823961258,
            "Text": "18",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "AGE",
            "Traits": []
        },
        {
            "Id": 59,
            "BeginOffset": 16,
            "EndOffset": 20,
            "Score": 0.6704834699630737,
            "Text": "ECOG",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.5469966530799866,
                    "RelationshipScore": 0.9991605281829834,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 62,
                    "BeginOffset": 97,
                    "EndOffset": 98,
                    "Text": "%",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 60,
            "BeginOffset": 86,
            "EndOffset": 90,
            "Score": 0.8780958652496338,
            "Text": "TNBC",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.5731589198112488,
                    "RelationshipScore": 0.8526167273521423,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 61,
                    "BeginOffset": 95,
                    "EndOffset": 97,
                    "Text": "<1",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.5469966530799866,
                    "RelationshipScore": 0.7383585572242737,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 62,
                    "BeginOffset": 97,
                    "EndOffset": 98,
                    "Text": "%",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 63,
            "BeginOffset": 100,
            "EndOffset": 102,
            "Score": 0.7675542235374451,
            "Text": "PR",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.5892030000686646,
                    "RelationshipScore": 0.9993854761123657,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 64,
                    "BeginOffset": 103,
                    "EndOffset": 105,
                    "Text": "<1",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.6037625670433044,
                    "RelationshipScore": 0.9641607403755188,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 65,
                    "BeginOffset": 105,
                    "EndOffset": 106,
                    "Text": "%",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 66,
            "BeginOffset": 114,
            "EndOffset": 117,
            "Score": 0.39850521087646484,
            "Text": "neu",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.8142862319946289,
                    "RelationshipScore": 0.984826922416687,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 67,
                    "BeginOffset": 118,
                    "EndOffset": 122,
                    "Text": "0-1+",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 57,
            "BeginOffset": 126,
            "EndOffset": 129,
            "Score": 0.18406672775745392,
            "Text": "IHC",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "ADDRESS",
            "Traits": []
        },
        {
            "Id": 15,
            "BeginOffset": 307,
            "EndOffset": 311,
            "Score": 0.7396898865699768,
            "Text": "TNBC",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.6338377594947815
                }
            ],
            "Attributes": [
                {
                    "Type": "QUALITY",
                    "Score": 0.5794891715049744,
                    "RelationshipScore": 1,
                    "RelationshipType": "QUALITY",
                    "Id": 13,
                    "BeginOffset": 283,
                    "EndOffset": 293,
                    "Text": "Metastatic",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                },
                {
                    "Type": "QUALITY",
                    "Score": 0.7949849963188171,
                    "RelationshipScore": 1,
                    "RelationshipType": "QUALITY",
                    "Id": 14,
                    "BeginOffset": 297,
                    "EndOffset": 306,
                    "Text": "recurrent",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 69,
            "BeginOffset": 341,
            "EndOffset": 361,
            "Score": 0.5139574408531189,
            "Text": "checkpoint inhibitor",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 70,
            "BeginOffset": 369,
            "EndOffset": 382,
            "Score": 0.3738609254360199,
            "Text": "PDL1-negative",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 5,
            "BeginOffset": 531,
            "EndOffset": 537,
            "Score": 0.9658052921295166,
            "Text": "breast",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 16,
            "BeginOffset": 531,
            "EndOffset": 544,
            "Score": 0.9762651920318604,
            "Text": "breast cancer",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.979880154132843
                }
            ]
        },
        {
            "Id": 58,
            "BeginOffset": 567,
            "EndOffset": 571,
            "Score": 0.12436851114034653,
            "Text": "22C3",
            "Category": "PROTECTED_HEALTH_INFORMATION",
            "Type": "ID",
            "Traits": []
        },
        {
            "Id": 1,
            "BeginOffset": 577,
            "EndOffset": 590,
            "Score": 0.9970725774765015,
            "Text": "pembrolizumab",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": []
        },
        {
            "Id": 2,
            "BeginOffset": 592,
            "EndOffset": 599,
            "Score": 0.9979350566864014,
            "Text": "Ventana",
            "Category": "MEDICATION",
            "Type": "BRAND_NAME",
            "Traits": []
        },
        {
            "Id": 3,
            "BeginOffset": 601,
            "EndOffset": 606,
            "Score": 0.9542620182037354,
            "Text": "SP142",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": []
        },
        {
            "Id": 4,
            "BeginOffset": 612,
            "EndOffset": 624,
            "Score": 0.9983564019203186,
            "Text": "atezolizumab",
            "Category": "MEDICATION",
            "Type": "GENERIC_NAME",
            "Traits": []
        },
        {
            "Id": 71,
            "BeginOffset": 655,
            "EndOffset": 671,
            "Score": 0.6986029744148254,
            "Text": "systemic therapy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 19,
            "BeginOffset": 700,
            "EndOffset": 718,
            "Score": 0.8095847964286804,
            "Text": "metastatic disease",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.9387716054916382
                }
            ],
            "Attributes": [
                {
                    "Type": "QUALITY",
                    "Score": 0.7188976407051086,
                    "RelationshipScore": 1,
                    "RelationshipType": "QUALITY",
                    "Id": 18,
                    "BeginOffset": 687,
                    "EndOffset": 696,
                    "Text": "recurrent",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 72,
            "BeginOffset": 740,
            "EndOffset": 756,
            "Score": 0.7178451418876648,
            "Text": "systemic therapy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 73,
            "BeginOffset": 827,
            "EndOffset": 839,
            "Score": 0.9509956240653992,
            "Text": "chemotherapy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 74,
            "BeginOffset": 841,
            "EndOffset": 850,
            "Score": 0.6011937260627747,
            "Text": "Radiation",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 75,
            "BeginOffset": 879,
            "EndOffset": 892,
            "Score": 0.5768536925315857,
            "Text": "local control",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 20,
            "BeginOffset": 921,
            "EndOffset": 926,
            "Score": 0.8742499351501465,
            "Text": "tumor",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.8897252082824707
                }
            ],
            "Attributes": [
                {
                    "Type": "DIRECTION",
                    "Score": 0.6247609853744507,
                    "RelationshipScore": 0.9998903274536133,
                    "RelationshipType": "DIRECTION",
                    "Id": 6,
                    "BeginOffset": 937,
                    "EndOffset": 939,
                    "Text": "RT",
                    "Category": "ANATOMY",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 21,
            "BeginOffset": 1018,
            "EndOffset": 1041,
            "Score": 0.5371143817901611,
            "Text": "metastases index lesion",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.5655680298805237
                }
            ],
            "Attributes": [
                {
                    "Type": "DIRECTION",
                    "Score": 0.9260408878326416,
                    "RelationshipScore": 0.9987805485725403,
                    "RelationshipType": "DIRECTION",
                    "Id": 7,
                    "BeginOffset": 1064,
                    "EndOffset": 1066,
                    "Text": "RT",
                    "Category": "ANATOMY",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 76,
            "BeginOffset": 1064,
            "EndOffset": 1066,
            "Score": 0.3728313744068146,
            "Text": "RT",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": []
        },
        {
            "Id": 77,
            "BeginOffset": 1113,
            "EndOffset": 1120,
            "Score": 0.8857839703559875,
            "Text": "therapy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 78,
            "BeginOffset": 1160,
            "EndOffset": 1173,
            "Score": 0.889274001121521,
            "Text": "immunotherapy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 79,
            "BeginOffset": 1268,
            "EndOffset": 1280,
            "Score": 0.5221539735794067,
            "Text": "RT treatment",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 22,
            "BeginOffset": 1337,
            "EndOffset": 1349,
            "Score": 0.4320024847984314,
            "Text": "tumor tissue",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": []
        },
        {
            "Id": 24,
            "BeginOffset": 1366,
            "EndOffset": 1371,
            "Score": 0.7522763013839722,
            "Text": "tumor",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.8064694404602051
                }
            ],
            "Attributes": [
                {
                    "Type": "QUALITY",
                    "Score": 0.6715918183326721,
                    "RelationshipScore": 1,
                    "RelationshipType": "QUALITY",
                    "Id": 23,
                    "BeginOffset": 1355,
                    "EndOffset": 1365,
                    "Text": "metastatic",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 80,
            "BeginOffset": 1518,
            "EndOffset": 1543,
            "Score": 0.4970197081565857,
            "Text": "core or excisional biopsy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": []
        },
        {
            "Id": 25,
            "BeginOffset": 1549,
            "EndOffset": 1561,
            "Score": 0.718533456325531,
            "Text": "tumor lesion",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": []
        },
        {
            "Id": 81,
            "BeginOffset": 1787,
            "EndOffset": 1797,
            "Score": 0.5077747702598572,
            "Text": "Hematology",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 82,
            "BeginOffset": 1799,
            "EndOffset": 1824,
            "Score": 0.8951756954193115,
            "Text": "Absolute Neutrophil Count",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.39647766947746277,
                    "RelationshipScore": 0.6209136247634888,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 83,
                    "BeginOffset": 1836,
                    "EndOffset": 1840,
                    "Text": "/mm3",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 84,
            "BeginOffset": 1841,
            "EndOffset": 1855,
            "Score": 0.9802713990211487,
            "Text": "Platelet Count",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.6288275718688965,
                    "RelationshipScore": 0.9999697208404541,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 85,
                    "BeginOffset": 1856,
                    "EndOffset": 1868,
                    "Text": "≥100,000/mm3",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 86,
            "BeginOffset": 1869,
            "EndOffset": 1882,
            "Score": 0.8973153233528137,
            "Text": "Hemoglobin ≥9",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.6814243793487549,
                    "RelationshipScore": 0.9792489409446716,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 87,
                    "BeginOffset": 1882,
                    "EndOffset": 1884,
                    "Text": ".0",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 10,
            "BeginOffset": 1890,
            "EndOffset": 1895,
            "Score": 0.9760717153549194,
            "Text": "Renal",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 89,
            "BeginOffset": 1890,
            "EndOffset": 1904,
            "Score": 0.9350443482398987,
            "Text": "Renal Function",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 90,
            "BeginOffset": 1906,
            "EndOffset": 1924,
            "Score": 0.7835935354232788,
            "Text": "Serum Creatinine ≤",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.8124549388885498,
                    "RelationshipScore": 0.7859351634979248,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 91,
                    "BeginOffset": 1925,
                    "EndOffset": 1928,
                    "Text": "1.5",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 92,
            "BeginOffset": 1987,
            "EndOffset": 2007,
            "Score": 0.5843781232833862,
            "Text": "creatinine clearance",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.7545104622840881,
                    "RelationshipScore": 0.9989217519760132,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 93,
                    "BeginOffset": 2010,
                    "EndOffset": 2012,
                    "Text": "60",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.5666381120681763,
                    "RelationshipScore": 0.9637706875801086,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 94,
                    "BeginOffset": 2013,
                    "EndOffset": 2019,
                    "Text": "mL/min",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 95,
            "BeginOffset": 2042,
            "EndOffset": 2045,
            "Score": 0.6741390228271484,
            "Text": "GFR",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 96,
            "BeginOffset": 2075,
            "EndOffset": 2103,
            "Score": 0.6516958475112915,
            "Text": "creatinine creatinine levels",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.6024578809738159,
                    "RelationshipScore": 1,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 97,
                    "BeginOffset": 2104,
                    "EndOffset": 2115,
                    "Text": "> 1.5 X ULN",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 98,
            "BeginOffset": 2142,
            "EndOffset": 2157,
            "Score": 0.8546193242073059,
            "Text": "Total Bilirubin",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.6148192286491394,
                    "RelationshipScore": 0.8322557806968689,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 99,
                    "BeginOffset": 2160,
                    "EndOffset": 2163,
                    "Text": "1.5",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.8443788886070251,
                    "RelationshipScore": 0.8277029395103455,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 100,
                    "BeginOffset": 2164,
                    "EndOffset": 2169,
                    "Text": "mg/dL",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 101,
            "BeginOffset": 2171,
            "EndOffset": 2187,
            "Score": 0.7775698900222778,
            "Text": "Direct bilirubin",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 102,
            "BeginOffset": 2216,
            "EndOffset": 2231,
            "Score": 0.8642398715019226,
            "Text": "total bilirubin",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.4199880063533783,
                    "RelationshipScore": 0.9840925931930542,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 103,
                    "BeginOffset": 2239,
                    "EndOffset": 2244,
                    "Text": "> 1.5",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.6980130076408386,
                    "RelationshipScore": 0.6202112436294556,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 104,
                    "BeginOffset": 2245,
                    "EndOffset": 2248,
                    "Text": "ULN",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 105,
            "BeginOffset": 2250,
            "EndOffset": 2253,
            "Score": 0.5942298173904419,
            "Text": "INR",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.37725895643234253,
                    "RelationshipScore": 0.47765231132507324,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 108,
                    "BeginOffset": 2266,
                    "EndOffset": 2275,
                    "Text": "1.5 x ULN",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 106,
            "BeginOffset": 2255,
            "EndOffset": 2257,
            "Score": 0.8567802906036377,
            "Text": "PT",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.37725895643234253,
                    "RelationshipScore": 0.6064925193786621,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 108,
                    "BeginOffset": 2266,
                    "EndOffset": 2275,
                    "Text": "1.5 x ULN",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 107,
            "BeginOffset": 2259,
            "EndOffset": 2265,
            "Score": 0.5401819944381714,
            "Text": "aPTT ≤",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.37725895643234253,
                    "RelationshipScore": 0.9999914169311523,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 108,
                    "BeginOffset": 2266,
                    "EndOffset": 2275,
                    "Text": "1.5 x ULN",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 109,
            "BeginOffset": 2300,
            "EndOffset": 2321,
            "Score": 0.9849982857704163,
            "Text": "anticoagulant therapy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 110,
            "BeginOffset": 2332,
            "EndOffset": 2334,
            "Score": 0.5223152041435242,
            "Text": "PT",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 111,
            "BeginOffset": 2338,
            "EndOffset": 2341,
            "Score": 0.6531580090522766,
            "Text": "PTT",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.5936532020568848,
                    "RelationshipScore": 0.36437565088272095,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 113,
                    "BeginOffset": 2378,
                    "EndOffset": 2381,
                    "Text": "2.5",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.8865006566047668,
                    "RelationshipScore": 0.4635487496852875,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 114,
                    "BeginOffset": 2382,
                    "EndOffset": 2387,
                    "Text": "mg/dL",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.4876464903354645,
                    "RelationshipScore": 0.7665213346481323,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 117,
                    "BeginOffset": 2423,
                    "EndOffset": 2433,
                    "Text": "2.5 x ULNb",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 112,
            "BeginOffset": 2368,
            "EndOffset": 2375,
            "Score": 0.9284645915031433,
            "Text": "Albumin",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.5936532020568848,
                    "RelationshipScore": 0.9004817605018616,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 113,
                    "BeginOffset": 2378,
                    "EndOffset": 2381,
                    "Text": "2.5",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                },
                {
                    "Type": "TEST_UNIT",
                    "Score": 0.8865006566047668,
                    "RelationshipScore": 0.6236551403999329,
                    "RelationshipType": "TEST_UNIT",
                    "Id": 114,
                    "BeginOffset": 2382,
                    "EndOffset": 2387,
                    "Text": "mg/dL",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 115,
            "BeginOffset": 2388,
            "EndOffset": 2414,
            "Score": 0.9624196887016296,
            "Text": "Aspartate Aminotransferase",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.4876464903354645,
                    "RelationshipScore": 0.8624363541603088,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 117,
                    "BeginOffset": 2423,
                    "EndOffset": 2433,
                    "Text": "2.5 x ULNb",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 116,
            "BeginOffset": 2416,
            "EndOffset": 2419,
            "Score": 0.3708880543708801,
            "Text": "AST",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.4876464903354645,
                    "RelationshipScore": 0.9603662490844727,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 117,
                    "BeginOffset": 2423,
                    "EndOffset": 2433,
                    "Text": "2.5 x ULNb",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 118,
            "BeginOffset": 2434,
            "EndOffset": 2458,
            "Score": 0.9726487398147583,
            "Text": "Alanine Aminotransferase",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 120,
            "BeginOffset": 2534,
            "EndOffset": 2554,
            "Score": 0.32088491320610046,
            "Text": "Creatinine clearance",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 121,
            "BeginOffset": 2604,
            "EndOffset": 2616,
            "Score": 0.47368544340133667,
            "Text": "Participants",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": []
        },
        {
            "Id": 11,
            "BeginOffset": 2622,
            "EndOffset": 2627,
            "Score": 0.9914860129356384,
            "Text": "liver",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 26,
            "BeginOffset": 2622,
            "EndOffset": 2638,
            "Score": 0.9493924975395203,
            "Text": "liver metastases",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.8149484992027283
                },
                {
                    "Name": "HYPOTHETICAL",
                    "Score": 0.7393038272857666
                }
            ]
        },
        {
            "Id": 122,
            "BeginOffset": 2648,
            "EndOffset": 2651,
            "Score": 0.5616677403450012,
            "Text": "AST",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 123,
            "BeginOffset": 2659,
            "EndOffset": 2662,
            "Score": 0.5455754399299622,
            "Text": "ALT",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": [],
            "Attributes": [
                {
                    "Type": "TEST_VALUE",
                    "Score": 0.3890824317932129,
                    "RelationshipScore": 0.8091526627540588,
                    "RelationshipType": "TEST_VALUE",
                    "Id": 124,
                    "BeginOffset": 2665,
                    "EndOffset": 2672,
                    "Text": "5 x ULN",
                    "Category": "TEST_TREATMENT_PROCEDURE",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 145,
            "BeginOffset": 2673,
            "EndOffset": 2679,
            "Score": 0.81186842918396,
            "Text": "Female",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 126,
            "BeginOffset": 2707,
            "EndOffset": 2736,
            "Score": 0.5071066617965698,
            "Text": "urine or serum pregnancy test",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 146,
            "BeginOffset": 2781,
            "EndOffset": 2786,
            "Score": 0.9281927347183228,
            "Text": "woman",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 27,
            "BeginOffset": 2874,
            "EndOffset": 2883,
            "Score": 0.7686168551445007,
            "Text": "pregnancy",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.841300904750824
                },
                {
                    "Name": "HYPOTHETICAL",
                    "Score": 0.5549398064613342
                }
            ]
        },
        {
            "Id": 127,
            "BeginOffset": 2889,
            "EndOffset": 2898,
            "Score": 0.5129551291465759,
            "Text": "screening",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 28,
            "BeginOffset": 3108,
            "EndOffset": 3114,
            "Score": 0.9424562454223633,
            "Text": "menses",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "NEGATION",
                    "Score": 0.6577736735343933
                }
            ],
            "Attributes": [
                {
                    "Type": "ACUITY",
                    "Score": 0.7447197437286377,
                    "RelationshipScore": 0.9999816417694092,
                    "RelationshipType": "ACUITY",
                    "Id": 29,
                    "BeginOffset": 3119,
                    "EndOffset": 3126,
                    "Text": ">1 year",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 30,
            "BeginOffset": 3150,
            "EndOffset": 3162,
            "Score": 0.9717802405357361,
            "Text": "amenorrhoeic",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "DIAGNOSIS",
                    "Score": 0.6925915479660034
                }
            ],
            "Attributes": [
                {
                    "Type": "ACUITY",
                    "Score": 0.7460672855377197,
                    "RelationshipScore": 0.9994499087333679,
                    "RelationshipType": "ACUITY",
                    "Id": 31,
                    "BeginOffset": 3167,
                    "EndOffset": 3175,
                    "Text": "<2 years",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 128,
            "BeginOffset": 3197,
            "EndOffset": 3209,
            "Score": 0.9865482449531555,
            "Text": "hysterectomy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.8411088585853577
                }
            ]
        },
        {
            "Id": 129,
            "BeginOffset": 3214,
            "EndOffset": 3226,
            "Score": 0.7234451770782471,
            "Text": "oophorectomy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": []
        },
        {
            "Id": 130,
            "BeginOffset": 3307,
            "EndOffset": 3327,
            "Score": 0.5783016085624695,
            "Text": "screening evaluation",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 131,
            "BeginOffset": 3362,
            "EndOffset": 3374,
            "Score": 0.8864656686782837,
            "Text": "oophorectomy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.9727190136909485
                }
            ]
        },
        {
            "Id": 132,
            "BeginOffset": 3379,
            "EndOffset": 3398,
            "Score": 0.6402227282524109,
            "Text": "post-tubal ligation",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.880179762840271
                }
            ]
        },
        {
            "Id": 133,
            "BeginOffset": 3411,
            "EndOffset": 3423,
            "Score": 0.9341174364089966,
            "Text": "hysterectomy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": []
        },
        {
            "Id": 134,
            "BeginOffset": 3427,
            "EndOffset": 3439,
            "Score": 0.9745261669158936,
            "Text": "oophorectomy",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": [
                {
                    "Name": "PAST_HISTORY",
                    "Score": 0.6662797927856445
                }
            ]
        },
        {
            "Id": 135,
            "BeginOffset": 3522,
            "EndOffset": 3532,
            "Score": 0.9362135529518127,
            "Text": "ultrasound",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 12,
            "BeginOffset": 3534,
            "EndOffset": 3539,
            "Score": 0.6416160464286804,
            "Text": "Tubal",
            "Category": "ANATOMY",
            "Type": "SYSTEM_ORGAN_SITE",
            "Traits": []
        },
        {
            "Id": 136,
            "BeginOffset": 3534,
            "EndOffset": 3548,
            "Score": 0.9875333309173584,
            "Text": "Tubal ligation",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "PROCEDURE_NAME",
            "Traits": []
        },
        {
            "Id": 137,
            "BeginOffset": 3684,
            "EndOffset": 3697,
            "Score": 0.7209088206291199,
            "Text": "birth control",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 138,
            "BeginOffset": 3727,
            "EndOffset": 3761,
            "Score": 0.6882893443107605,
            "Text": "abstain from heterosexual activity",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 139,
            "BeginOffset": 3836,
            "EndOffset": 3846,
            "Score": 0.5555116534233093,
            "Text": "medication",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 140,
            "BeginOffset": 3926,
            "EndOffset": 3936,
            "Score": 0.3340160846710205,
            "Text": "sterilized",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 32,
            "BeginOffset": 3964,
            "EndOffset": 3970,
            "Score": 0.5084803700447083,
            "Text": "menses",
            "Category": "MEDICAL_CONDITION",
            "Type": "DX_NAME",
            "Traits": [
                {
                    "Name": "HYPOTHETICAL",
                    "Score": 0.6754078269004822
                }
            ],
            "Attributes": [
                {
                    "Type": "ACUITY",
                    "Score": 0.5022709965705872,
                    "RelationshipScore": 0.9999908208847046,
                    "RelationshipType": "ACUITY",
                    "Id": 33,
                    "BeginOffset": 3975,
                    "EndOffset": 3983,
                    "Text": "> 1 year",
                    "Category": "MEDICAL_CONDITION",
                    "Traits": []
                }
            ]
        },
        {
            "Id": 147,
            "BeginOffset": 4089,
            "EndOffset": 4093,
            "Score": 0.8542075157165527,
            "Text": "Male",
            "Category": "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
            "Type": "GENDER",
            "Traits": []
        },
        {
            "Id": 141,
            "BeginOffset": 4243,
            "EndOffset": 4258,
            "Score": 0.4838361442089081,
            "Text": "study treatment",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 142,
            "BeginOffset": 4545,
            "EndOffset": 4550,
            "Score": 0.7276129722595215,
            "Text": "study",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TEST_NAME",
            "Traits": []
        },
        {
            "Id": 143,
            "BeginOffset": 4589,
            "EndOffset": 4604,
            "Score": 0.4682435095310211,
            "Text": "study treatment",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        },
        {
            "Id": 144,
            "BeginOffset": 4752,
            "EndOffset": 4775,
            "Score": 0.42398592829704285,
            "Text": "retain oral medications",
            "Category": "TEST_TREATMENT_PROCEDURE",
            "Type": "TREATMENT_NAME",
            "Traits": []
        }
    ],
    "UnmappedAttributes": [
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_VALUE",
                "Score": 0.48464736342430115,
                "Id": 68,
                "BeginOffset": 158,
                "EndOffset": 161,
                "Text": "low",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "MEDICAL_CONDITION",
            "Attribute": {
                "Type": "QUALITY",
                "Score": 0.4593132734298706,
                "Id": 17,
                "BeginOffset": 676,
                "EndOffset": 686,
                "Text": "inoperable",
                "Category": "MEDICAL_CONDITION",
                "Traits": []
            }
        },
        {
            "Type": "ANATOMY",
            "Attribute": {
                "Type": "DIRECTION",
                "Score": 0.6247609853744507,
                "Id": 6,
                "BeginOffset": 937,
                "EndOffset": 939,
                "Text": "RT",
                "Category": "ANATOMY",
                "Traits": []
            }
        },
        {
            "Type": "ANATOMY",
            "Attribute": {
                "Type": "DIRECTION",
                "Score": 0.9260408878326416,
                "Id": 7,
                "BeginOffset": 1064,
                "EndOffset": 1066,
                "Text": "RT",
                "Category": "ANATOMY",
                "Traits": []
            }
        },
        {
            "Type": "ANATOMY",
            "Attribute": {
                "Type": "DIRECTION",
                "Score": 0.8511534333229065,
                "Id": 8,
                "BeginOffset": 1191,
                "EndOffset": 1193,
                "Text": "RT",
                "Category": "ANATOMY",
                "Traits": []
            }
        },
        {
            "Type": "ANATOMY",
            "Attribute": {
                "Type": "DIRECTION",
                "Score": 0.7973757982254028,
                "Id": 9,
                "BeginOffset": 1268,
                "EndOffset": 1270,
                "Text": "RT",
                "Category": "ANATOMY",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_UNIT",
                "Score": 0.9952259063720703,
                "Id": 88,
                "BeginOffset": 1885,
                "EndOffset": 1889,
                "Text": "g/dL",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_VALUE",
                "Score": 0.3556012511253357,
                "Id": 119,
                "BeginOffset": 2467,
                "EndOffset": 2477,
                "Text": "2.5 x ULNb",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "TEST_TREATMENT_PROCEDURE",
            "Attribute": {
                "Type": "TEST_VALUE",
                "Score": 0.946078360080719,
                "Id": 125,
                "BeginOffset": 2698,
                "EndOffset": 2706,
                "Text": "negative",
                "Category": "TEST_TREATMENT_PROCEDURE",
                "Traits": []
            }
        },
        {
            "Type": "MEDICAL_CONDITION",
            "Attribute": {
                "Type": "ACUITY",
                "Score": 0.7447197437286377,
                "Id": 29,
                "BeginOffset": 3119,
                "EndOffset": 3126,
                "Text": ">1 year",
                "Category": "MEDICAL_CONDITION",
                "Traits": []
            }
        },
        {
            "Type": "MEDICAL_CONDITION",
            "Attribute": {
                "Type": "ACUITY",
                "Score": 0.7460672855377197,
                "Id": 31,
                "BeginOffset": 3167,
                "EndOffset": 3175,
                "Text": "<2 years",
                "Category": "MEDICAL_CONDITION",
                "Traits": []
            }
        },
        {
            "Type": "MEDICAL_CONDITION",
            "Attribute": {
                "Type": "ACUITY",
                "Score": 0.5022709965705872,
                "Id": 33,
                "BeginOffset": 3975,
                "EndOffset": 3983,
                "Text": "> 1 year",
                "Category": "MEDICAL_CONDITION",
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

console.log(patientText);
