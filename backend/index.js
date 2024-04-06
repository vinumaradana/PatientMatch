import express from "express";
import {PORT, mongoDBURL} from "./config.js"
import dotenv from "dotenv";
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send('lololol');
})

//route for save patient. 
app.post('/patients', async (request, response)=>{
    try{
        if(!request.body.data){
            return response.status(400).send({
                message: 'Send all required fields: data',
            });
        }
        const newPatient = {
            data: request.body.data,
        };
        const patient = await Patient.create(newPatient);
        return response.status(201).send(patient);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to databse');
        app.listen(PORT, ()=>{
            console.log('hello');
        })
    })
    .catch((error) =>{
        console.log(error);
    });


import AWS from "aws-sdk";
import { Patient } from "./models/patientModel.js";
dotenv.config();

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

