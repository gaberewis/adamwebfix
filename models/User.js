import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
name : String,
email : String,
password : String,
role : {
    type : String,
    enum : ['admin', 'user'],
    default : 'user'
    }},{ timestamps: true });

UserSchema.methods.toJSON = function() {
    let userObject = this.toObject();
    delete userObject.password;
    return userObject;
}

export default mongoose.model('User', UserSchema);