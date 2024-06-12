import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'
import ApiError from './ApiError.js'
import ApiSuccess from './ApiSuccess.js'
 let imageurl = []


async function uploadImage(image) {
  
   //code if we use upload.fields method in multer
   await cloudinary.uploader.upload(image.image1[0].path , {public_id : image.image1[0].originalname})
   .then((result)=>{
    imageurl.push(result.secure_url)
    fs.unlinkSync(image.image1[0].path)
   const api = new ApiSuccess("image uploaded successfully" ,200)
    console.log(api.message,api.statuscode)
   })
   .catch(()=>{
   const err = new ApiError("image was not uploaded successfully",300)
   fs.unlinkSync(image.image1[0].path)
    console.log(err.message,err.statuscode)
   })
   await cloudinary.uploader.upload(image.image2[0].path , {public_id : image.image2[0].originalname})
   .then((result)=>{
    imageurl.push(result.secure_url)
    fs.unlinkSync(image.image2[0].path)
   const api =  new ApiSuccess("image uploaded successfully" ,200)
    console.log(api.message,api.statuscode)
   })
   .catch(()=>{
   const err = new ApiError("image was not uploaded successfully",300)
   fs.unlinkSync(image.image2[0].path)
    console.log(err.message,err.statuscode)
   })
   await cloudinary.uploader.upload(image.image3[0].path , {public_id : image.image3[0].originalname})
   .then((result)=>{
    imageurl.push(result.secure_url)
   const api = new ApiSuccess("image uploaded successfully" ,200)
   fs.unlinkSync(image.image3[0].path)
    console.log(api.message,api.statuscode)
   })
   .catch(()=>{
   const err = new ApiError("image was not uploaded successfully",300)
   fs.unlinkSync(image.image3[0].path)
    console.log(err.message,err.statuscode)
   })

   //alternate code if you use upload.array in multer

    //  await Promise.all( images.map(async (item , index) => {
    //     const originalname = item.originalname;
    //     return await cloudinary.uploader.upload('./public/' + originalname, { public_id: originalname }).then((result)=>{
    //       imageurl.push( result.secure_url)
    //       console.log(imageurl)
    //       console.log("image uploaded successfully")})
    //     .catch((error) => {
    //       console.log(error);
          
          
    //     });
    //   }));

      return imageurl
}

export default uploadImage

