import { ProductModel } from "../models/productSave.model.js";
let productSaver = async(productData,prodImageUrls)=>{
   console.log(productData,prodImageUrls)
   const {productname,productstock,productprice,productcat,productdisc,productdiscription,productvarients,
          username,colors,xxs,xs,s,l,m,xl,xxl,xxxl} = productData
   let modifyColors = colors.split(" ")
   const size= [{xxs : xxs}, {xs : xs},{ s : s},{ m : m},{l : l},{ xl : xl},{xxl : xxl},{xxxl : xxxl}]
   console.log(productData)
   const saveProduct = new ProductModel({
    productName : productname,
    productStock : productstock,
    productPrice : productprice,
    productCatagory : productcat,
    productImages : prodImageUrls,
    productDiscount : productdisc,
    productDisccription : productdiscription,
    productVarients : productvarients,
    productColors :  modifyColors,
    productSizes : size,
   createdBy : username

   })
   console.log(saveProduct)
   try {
      await saveProduct.save()
      console.log('product has been successfully')
   } catch (error) {
      console.log('product did not save')
   }
}

export default productSaver