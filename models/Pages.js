
import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    imageUrl: String,
    imageId: String,
  },
  { _id: false }
);


const pagesSchema = new mongoose.Schema(
  {
    company: String,
    product: String,
    price: String,
    discount: String,
    currency: String,
    description: String,
    phone: String,
    email: String,
    whatsapp: String,
    address: String,
    order: {
      type: String,
      enum: ["phone", "whatsapp", "email"],
      default: "whatsapp"
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    specification: {
      type: Array,
      default: [],
    },
    paymentDate: String,
    status: {
      type: String,
      enum: ["active", "blocked", "deleted"],
      default: "active",
    },
    images: [imageSchema],

  },
  { timestamps: true }
);

export default mongoose.model("Pages", pagesSchema);














