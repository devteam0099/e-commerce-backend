import mongoose from "mongoose";

const storeReg = new mongoose.Schema({
     shopName : {
        type : String,
        required : true,
        
     },
     
     shopAddress : {
        type  : String,
        required : true
     },
     owner : {
        type : String,
        required : true,
        
     }
})

export const Storemodel = mongoose.model('Storemodel', storeReg ,'stores')