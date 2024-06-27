import { v2 as Cloudinary } from "cloudinary";

let productImageUploader = async(productimages)=>{
    const imageUrls = []
    
    console.log(productimages)
    let images= [productimages.image1[0],productimages.image2[0],productimages.image3[0],productimages.image4[0]]
    for(let i = 0 ; i < images.length ; i ++){
         await Cloudinary.uploader.upload(images[i].path , {public_id : images[i].originalname})
        .then((imageurl)=>{
            imageUrls.push(imageurl.secure_url)
        })
    }
    
    return imageUrls;
}
export default productImageUploader