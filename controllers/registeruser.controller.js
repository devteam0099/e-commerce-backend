
import profileimageuploader from "../utils/profileimage.uploader.js"
import userhandler from "../utils/userhandler.js"


let registerUserController = async(req,res)=>{
 
 const  profilepictureurl = await profileimageuploader(req.files)
 console.log(profilepictureurl)
 console.log('control is in controller')
   userhandler(req.body,profilepictureurl)
   console.log(req.body)


}
export default registerUserController