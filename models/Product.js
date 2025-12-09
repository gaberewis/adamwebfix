import mongoose from "mongoose";

const ProudctSchema = new mongoose.Schema({
    name: String,
    productType : String,
    catagory: String,
    mainImage : String,
    mainImmagePublicId : String,
    shortDescription : String,
    fullDescription : String,
    secondImage : String,
    secondImagePublicId : String,
    discriptionTow : String,
     thirdImage : String,
    thirdImagePublicId : String,
    discriptionThree : String,
     fourthImage : String,
    fourthImagePublicId : String,
    discriptionfour : String,
     fifthImage : String,
    fifthImagePublicId : String,
    discriptionFive : String,


}, { timestamps: true });

export default mongoose.model('Proudct', ProudctSchema);