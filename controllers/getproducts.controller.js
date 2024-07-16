import { ProductModel } from "../models/productSave.model.js";

let getProductsController = async(req,res)=>{
    const pageNo = 0
  try {
    const products = await ProductModel.find({}).skip(20 * pageNo).limit(20).exec()
    if(products){
        console.log(products)
        res.json(products)
    }else{
        re.send({message : 'no products found'})
    }
    
   } catch (error) {
    res.send({message : 'error in executing products obtaining function'})
   } 

   
      // temperory testing
     
     
     /* res.json([{
        productName : 'hockey',
        productPrice : 1000,
        productCatagory : "soprts",
        productStock : 120,
        productImages : [
            'https://res.cloudinary.com/dsv8gqse5/image/upload/v1718220348/sample3.jpeg.jpg',
            'https://res.cloudinary.com/dsv8gqse5/image/upload/v1717752738/public.jpg',
            'https://res.cloudinary.com/dsv8gqse5/image/upload/v1717757853/sample1.avif.avif',
            'https://res.cloudinary.com/dsv8gqse5/image/upload/v1717757853/sample8.jpg.jpg'
        ],
        productDiscount : 'none',
        productVarients : 'none',
        productDisccription : 'none'
}])  */

}
export default getProductsController