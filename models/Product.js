import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    name: String,
    productType: String,
    section: {
        type: String,
        enum: ['equipment', 'accessories', 'supplies', 'parts', 'other']
    },
    catagory:  String,
    catId : String,
    images: [
        { imageUrl: String ,  imageId: String }
    ],
    image : String,
    imageId : String,
    shortDescription: String,
    fullDescription: String,
    papular: { type: String, enum: ['true', 'false'], default: true }
}, { timestamps: true });

productschema.pre("save", function(next){
    if(req.body.catagory){
        return catId = req.body.catagory.toLowerCase().replace(/\s+/g,"");
    }
next();
});

export default mongoose.model('Proudct', productschema);