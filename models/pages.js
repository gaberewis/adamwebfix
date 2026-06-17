import mongoose from "mongoose";

const PagesSchema  = new mongoose.Schema({

transactioId : String,
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
}

},{timestamps : true});


export default mongoose.model('Pages', PagesSchema);