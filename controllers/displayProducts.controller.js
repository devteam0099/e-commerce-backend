import { ProductModel } from "../models/productSave.model.js";


let displayProductsController = async (req, res) => {
  try {
    
    const productsData =await ProductModel.find({createdBy : req.body.username}).skip(20*(parseInt(req.body.pageNumber))).limit(20).exec()
    console.log(productsData)
    res.json(productsData)
    
  } catch (error) {
    res.send({message : 'could not load data'})
  }
};


export default displayProductsController;
