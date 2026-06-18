import mongoose from "mongoose";

const PagesSchema  = new mongoose.Schema({

transactionId : String,
orderId : String,
amount : String,

 user : {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
paymentDate : {
type : Date,
default : Date.now(),
},
isActive : {
type : Boolean,
default : true
},
paymentDate : String,

},{timestamps : true});


export default mongoose.model('Pages', PagesSchema);