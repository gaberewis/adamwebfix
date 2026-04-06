import mongoose, { Schema } from 'mongoose';

const homeSchema = new Schema({
name : String,
email : String,
phone : String,
clientmsg : String
}) 

export default mongoose.model('Homeform', homeSchema);