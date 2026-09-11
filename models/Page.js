
import mongoose from "mongoose";

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
    price: String,
    discount: String,
    currency: String,
    description: String,
    phone: String,
    email: String,
    whatsapp: String,
    address: String,
    paymentDate: String,
    
    order: {
      type: String,
      enum: ["phone", "whatsapp", "email"],
      default: "whatsapp"
    },    
    status: {
      type: String,
      enum: ["active", "inActive", "blocked", "deleted"],
      default: "inActive",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    images: [imageSchema],
    specification : [specItem],

  },
  { timestamps: true }
);

export default mongoose.model("Pages", pagesSchema);














