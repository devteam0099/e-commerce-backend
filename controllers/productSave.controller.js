import productImageUploader from "../utils/productImageUploader.js"
import productSaver from "../utils/productSaver.util.js"
let productSaveController = async(req,res)=>{
    const productImagesUrls = await productImageUploader(req.files)
   // console.log(req.body)
    productSaver(req.body,productImagesUrls)
}
export default productSaveController