import { ProductModel } from "../models/productSave.model.js"

let deleteProductController = async(req,res)=>{
    console.log(req.body.productID)
    await ProductModel.deleteOne({_id : req.body.productID})
    .then((resp)=>{res.send({message : "product has been deleted successfully"})})
    .catch((error)=>{res.send({message : "problem in deleting product"})})

}
export default deleteProductController