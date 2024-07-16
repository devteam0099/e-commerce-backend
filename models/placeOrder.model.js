import mongoose from "mongoose";
const placeorder = new mongoose.Schema({
    paymentType : {
        type : String,
        required : true
    },
    productName : {
        type : String,
        required : true
    },
    orderCost : {
        type : String,
        required : true
    },
    discount : {
        type : String,
        required : true
    },
    productSize : {
        type : String
    },
    productColor : {
        type : String
    },
    currency : {
        type : String
    },
    cardNumber : {
        type : String
    },
    cardCVV : {
        type : String
    },
    issueDate : {
        type : String
    },
    expiryDate : {
        type : String
    },
    cardName : {
        type : String
    }


}, {timestamps : true})

export const placeOrderModel = mongoose.model('placeOrderModel', placeorder, 'orders')