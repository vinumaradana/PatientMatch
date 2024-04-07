import express from "express";
import {PORT, mongoDBURL} from "./config.js"
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send('lololol');
})


// Function to handle route for saving data
const saveData = async (request, response, Model) => {
    try {
        if (!request.body.data) {
            return response.status(400).send({
                message: 'Send all required fields: data',
            });
        }
        const newData = {
            data: request.body.data,
        };
        const data = await Model.create(newData);
        return response.status(201).send(data);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// Route for saving patient data
app.post('/patients', async (request, response) => {
    await saveData(request, response, Patient);
});

// Route for saving clinical data
app.post('/clinicals', async (request, response) => {
    await saveData(request, response, Clinical);
});


// Function to handle route for getting all data
const getAllData = async (request, response, Model) => {
    try {
        const data = await Model.find({});
        return response.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// Route for getting all patient data
app.get('/patients', async (request, response) => {
    await getAllData(request, response, Patient);
});

// Route for getting all clinical trial data
app.get('/clinicals', async (request, response) => {
    await getAllData(request, response, Clinical);
});


// Function to handle route for getting data by ID
const getDataById = async (request, response, Model) => {
    try {
        const { id } = request.params;
        const data = await Model.findById(id);
        return response.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// Routes for getting patient data by ID
app.get('/patients/:id', async (request, response) => {
    await getDataById(request, response, Patient);
});

// Routes for getting clinical trial data by ID
app.get('/clinicals/:id', async (request, response) => {
    await getDataById(request, response, Clinical);
});


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
import { Clinical } from "./models/clinicalModel.js";
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

