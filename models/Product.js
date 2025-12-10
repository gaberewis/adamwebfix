import mongoose from "mongoose";

const ProudctSchema = new mongoose.Schema({
    name: String,
    productType: String,
    section: {
        type: String,
        enum: ['equipment', 'accessories', 'supplies', 'parts', 'other']
    },
    catagory: String,
    images: [
        { imageUrl: String }, { imageId: String }
    ],
    image : String,
    imageId : String,
    shortDescription: String,
    fullDescription: String,
    papular: { type: String, enum: ['true', 'false'], default: true }
}, { timestamps: true });

export default mongoose.model('Proudct', ProudctSchema);