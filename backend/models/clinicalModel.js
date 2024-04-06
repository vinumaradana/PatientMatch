import mongoose from "mongoose"; 

const clinicalSchema = mongoose.Schema(
    {
        data: { type: Object, required: true }
    }
);

export const Clinical = mongoose.model('Clinical', clinicalSchema)