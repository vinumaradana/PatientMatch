var AWS = require("aws-sdk");
require("dotenv").config();

var comprehendmedical = new AWS.ComprehendMedical({
    comprehendmedical: "2018-10-30"
});

async function getDetails(text) {
    var params = {
        Text: text
    };

    var data = await comprehendmedical.detectEntitiesV2(params).promise();
    console.log(data);
    var diseases = [];
    for (const entity of data["Entities"]) {
        if (entity["Category"] === "MEDICAL_CONDITION") {
            diseases.push(entity["Text"]);
        }

    }
    return ("identified desases are: " + diseases.join(", "));
}
async function main(text) {
    var diseases = await getDetails(text);
    console.log("Getting Detials \n");
    console.log(diseases);
}
main('Pt is 87 yo woman, highschool teacher with past medical history that includes status post cardiac catheterization in April 2019. She presents today with palpitations and chest pressure HPI : Sleeping trouble on present dosage of Clonidine. Severe Rash  on face and leg, slightly itchy. Meds : Vyvanse 50 mgs po at breakfast daily, Clonidine 0.2 mgs -- 1 and 1 / 2 tabs po qhs HEENT : Boggy inferior turbinates, No oropharyngeal lesion. Lungs : clear.')

