
import mongoose from 'mongoose'
let user = new mongoose.Schema({
    name:{
      type : String,
      required:[true,"user name is empty"],
      unique:[true,"this user name alreayd exists! try another"]
    },
    product1: {
      type :String
    },
    product2: {
      type :String
    },
    product3: {
      type :String
    }
    
  })
  
 export const register = mongoose.model("register",user,'amanagers');
  
  