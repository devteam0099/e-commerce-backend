import mongoose from "mongoose";
const user = new mongoose.Schema({
    firstname :{
        required : true,
        type : String
    },
    lastname :{
        required :true,
        type : String
    },
    username :{
        required : true,
        unique : true,
        type : String,
        lowercase : true,
        trim : true
    },
    email :{
        required : true,
        type : String,
        lowercase : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    },
    profileimage : {
        type : String
    }
})

export const User = mongoose.model('User',user,'users')