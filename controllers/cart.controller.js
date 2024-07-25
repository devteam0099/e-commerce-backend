import { ProductModel } from "../models/productSave.model.js";

let cartController = async(req,res)=>{
   try {
    const {_id}= req.body
    const cart = await ProductModel.updateOne({_id : _id},{$set : {cart : 'yes'}},{upsert : true})
    
     res.send({message : 'product has been added to cart'})
    
   } catch (error) {
    res.send({message : 'error in adding product to cart'})
   }
}
export default cartController