import { ProductModel } from "../models/productSave.model.js";
let productSaver = async(productData,prodImageUrls)=>{
   console.log(productData,prodImageUrls)
   const {productname,productstock,productprice,productcat,productdisc,productdiscription,productvarients,username} = productData
   const saveProduct = new ProductModel({
    productName : productname,
    productStock : productstock,
    productPrice : productprice,
    productCatagory : productcat,
    productImages : prodImageUrls,
    productDiscount : productdisc,
    productDisccription : productdiscription,
    productVarients : productvarients,
    CreatedBy : username

   })
   
   try {
     // await saveProduct.save()
      console.log('product has been successfully')
   } catch (error) {
      console.log('product did not save')
   }
}

export default productSaver