import { ProductModel } from "../models/productSave.model.js"

let productsUpdateController = async(req,res)=>{
    console.log(req.body)
    console.log(req.body.productID)
  await  ProductModel.updateOne({_id : req.body.productID},{$set : {
        productName : req.body.name,
        productStock : req.body.stock,
        productPrice  : req.body.price,
        productCatagory : req.body.catagory,
        productDiscount : req.body.discount,
        productDisccription : req.body.Description,
        productVarients : req.body.varients,
        

    }},{upsert : false})
    .then((success)=>{
        console.log('product updated')
        res.send({message: "product has been successfully updated"})})
    .catch((err)=>{res.send({message: "product did not updated"})})
  }
  export default productsUpdateController
  
  