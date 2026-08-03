import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    otp: String,
    otpExpires: Date,

    role: {
      type: String,
      default: "user",
    },

    paymentDetails: {
      type: Array,
      default: [],
    },

    status: {
      type: String,
      enum: ["active", "blocked", "deleted"],
      default: "active",
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

export default mongoose.model("User", UserSchema);