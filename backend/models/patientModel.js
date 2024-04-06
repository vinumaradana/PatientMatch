import mongoose from "mongoose"; 

const patientSchema = mongoose.Schema(
    {
        data: { type: Object, required: true }
    }
);

const Patient = mongoose.model('Patient', patientSchema)