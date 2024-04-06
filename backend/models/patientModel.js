import mongoose from "mongoose"; 

const patientSchema = mongoose.Schema(
    {
        data: { type: Object, required: true }
    }
);

export const Patient = mongoose.model('Patient', patientSchema)