import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'
import ApiError from './ApiError.js'
import ApiSuccess from './ApiSuccess.js'
let profileimageurl


let profileimageuploader = async(profile)=>{
    
    await cloudinary.uploader.upload(profile.profileimage[0].path ,{public_id : profile.profileimage[0].originalname})
    .then((resp)=>{ 
        profileimageurl = resp.secure_url
        fs.unlinkSync(profile.profileimage[0].path)
        const upload = new ApiSuccess('profile picture uploaded successfully' , 200)
        console.log('image uploaded on cloudinary')
        
    })
    .catch(()=>{
        fs.unlinkSync(profile.profileimage[0].path)
        throw new ApiError('profile picture was not uploaded',409)
    })
    return profileimageurl
}
export default profileimageuploader