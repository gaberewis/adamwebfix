import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    name: String,
    category: {
        type: String,
        enum: ['equipment', 'accessories', 'supplies', 'parts']
    },
  
    images: [
        { imageUrl: String, imageId: String }
    ],
    shortDescription: String,
    fullDescription: String,
    popular: { type: String, enum: ['yes', 'no'], default: 'yes' }
}, { timestamps: true });



// productschema.pre("save", function (next) {
//   if (this.category) {
//     this.catId = this.category
//       .toLowerCase()
//       .replace(/\s+/g, "");
//   }
//   next();
// });

export default mongoose.model('Product', productschema);