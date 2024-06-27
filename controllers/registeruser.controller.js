
import profileimageuploader from "../utils/profileimage.uploader.js"
import userhandler from "../utils/userhandler.js"


let registerUserController = async(req,res)=>{
 if(req.files && req.files.length > 0){
 const  profilepictureurl = await profileimageuploader(req.files)
 console.log(profilepictureurl)
   userhandler(req.body,profilepictureurl)
   console.log(req.body)
 }else{
  userhandler(req.body)
  console.log(req.body)
  console.log('user saves without frofile picture')
 }

}
export default registerUserController