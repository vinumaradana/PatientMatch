import express from "express";
import {PORT, mongoDBURL} from "./config.js"
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors';
import AWS from "aws-sdk";
import { Patient } from "./models/patientModel.js";
import { Clinical } from "./models/clinicalModel.js";
import {EJSON} from 'bson';
dotenv.config();


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
// app.post('/patients', async (request, response) => {
//     await saveData(request, response, Patient);
// });
app.post('/patients', async (request, response) => {
    try {
        const newData = request.body.data;
        const medicalDetails = await getMedicalDetails(newData);
        // Now you have the medical details, you can process further or save them to the database
        const patientData = {
            data: medicalDetails
        };
        const data = await Patient.create(patientData);
        return response.status(201).send(data);
    } catch (error) {
        console.error(error);
        response.status(500).send({ message: error.message });
    }
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


var comprehendmedical = new AWS.ComprehendMedical({
    comprehendmedical: "2018-10-30"
});


async function getMedicalDetails(text) {
    try {
        const params = {
            Text: text
        };
        const data = await comprehendmedical.detectEntitiesV2(params).promise();
        return data; // Return the output of calling AWS Comprehend Medical
    } catch (error) {
        console.error("Error processing medical details:", error);
        throw error; // rethrow the error to be handled by the caller
    }
}

// Define a route to handle the matching process
app.post('/matchProcess', async (request, response) => {
    try {
      // Find the last inserted document in the 'Market' collection
        const lastInsertedDocument = await Patient.find({}).sort({_id: -1}).limit(1);
  
      // Fetch all clinical data
       const clinicalData = await Clinical.find({});
      
       // Access the data object
// Extract the 'Entities' array from the 'data' object
const entities = lastInsertedDocument[0].data.Entities;

// Initialize variables to store age and gender
let age, gender;

// Loop through the Entities array to find the age and gender
entities.forEach(entity => {
    if (entity.Type === "AGE") {
        age = entity.Text;
    } else if (entity.Type === "GENDER") {
        gender = entity.Text;
    }
});




      // Your matching process logic here
      // Assume 'dataDocument' is the MongoDB document containing the JSON data
    //   const data = JSON.parse(jsonformat); // Assuming 'dataDocument' contains the string representation of JSON data
    //   const ageEntity = data.Entities.find(entity => entity.Type === 'AGE');
    //   const genderEntity = data.Entities.find(entity => entity.Type === 'GENDER');
  
    //   const age = ageEntity ? ageEntity.Text : null;
    //   const gender = genderEntity ? genderEntity.Text : null;
  
    //   console.log("Age:", age);
    //   console.log("Gender:", gender);
      // Example response indicating success
      response.status(200).json({ message: 'Matching process done', age, gender});
    } catch (error) {
      // Handle errors appropriately
      console.error('Error in completing matching process:', error);
      response.status(500).json({ message: 'Error in completing matching process' });
    }
  });
  
