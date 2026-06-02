import mongoose, { Schema } from 'mongoose';

const homeSchema = new Schema({
name : String,
email : String,
phone : String,
clientMsg : String

}, {timestamps : true}); 

export default mongoose.model('Homeform', homeSchema);