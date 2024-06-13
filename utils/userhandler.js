
import ApiError from "./ApiError.js";
import ApiSuccess from "./ApiSuccess.js";
import { User } from "../models/user.model.js";

const userhandler = (userdata,profilepictureurl)=>{
    console.log(userdata,profilepictureurl)
      
    const newuser = new User({
        firstname : userdata.firstname,
        lastname : userdata.lastname,
        username : userdata.username,
        email : userdata.email,
        password : userdata.password,
        profileimage : profilepictureurl
    })
}

try {
   await newuser.save()
   const success = new ApiSuccess("user has been registered successfully",200)
   console.log(success.message,success.statuscode)
} catch (error) {
   // throw new ApiError("user had not been registered ! try again", 409)
   }

    export default userhandler