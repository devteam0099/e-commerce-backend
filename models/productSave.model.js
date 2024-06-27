import mongoose, { Schema } from "mongoose";
const saveProductModel = new  mongoose.Schema({
    productName : {
        type : String,
        required : true
    },
    productStock :{
       type : String,
       required : true
    },
    productPrice : {
        type : String,
        required : true
    },
    productCatagory : {
        type : String,
        required : true
    },
    productImages : [{
        type : String,
        required : true
    }],
    productDiscount : {
        type : String,
        required : true
    },
    productDisccription : {
        type : String,
        required : true
    },
    productVarients : {
        type : String,
        required : true
    },
    CreatedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }


},{timestamps : true})

export const ProductModel = mongoose.model('ProductModel',saveProductModel,'products')