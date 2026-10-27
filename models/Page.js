
import mongoose, { Mongoose } from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    imageUrl: String,
    imageId: String,
  },
  { _id: false }
);

const specItem = new mongoose.Schema(
  {
    spec: String,
    details: String,
  },
  { _id: false }
);

const pagesSchema = new mongoose.Schema(
  {
    company: String,
    product: String,
    price: Number,
    discount: Number,
    currency: String,
    description: String,
    phone: String,
    email: String,
    whatsapp: String,
    address: String,

    paymentData:{
      type : Array,
      default : []
    },
    
    order: {
      type: String,
      enum: [ "whatsapp", "phone", "email"],
      default: "whatsapp"
    },    
    status: {
      type: String,
      enum: ["active", "inactive", "deactivated", "blocked"],
      default: "inactive",
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required : true,
    },

    images: [imageSchema],
    specification : [specItem],
    reported : {
      type : Number,
      default : 0,
    },
    report : {
      type : [String],
      default : []
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("Pages", pagesSchema);














