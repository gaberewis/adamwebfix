import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {type: String,trim: true},
    email: {type: String,trim: true},
    password: String,
    otp: String,
    otpExpires: Date,

    role: {
      type: String,
      default: "user",
    },

    status: {
      type: String,
      enum: ["active", "blocked"],
      default: "active",
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.otp;
  delete userObject.otpExpires;
  return userObject;
};

export default mongoose.model("User", UserSchema);