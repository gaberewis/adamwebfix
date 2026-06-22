
import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    imageUrl: String,
    imageId: String,
  },
  { _id: false }
);

const sectionSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: imageSchema,
  },
  { _id: false }
);

const pagesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    price: {
      type: Number,
    },

    description: String,
    slid : [ imageSchema ],

    sectionOne: sectionSchema,

    sectionTwo: sectionSchema,

    sectionThree: sectionSchema,

    contact: {
      email: String,
      whatsapp: String,
      phone: String,
    },

    transactionId: String,

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    paymentDate: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Pages", pagesSchema);














