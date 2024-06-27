
import ApiError from "./ApiError.js";
import ApiSuccess from "./ApiSuccess.js";
import { User } from "../models/user.model.js";

const userhandler = async(userdata,profilepictureurl = null)=>{
    console.log(userdata,profilepictureurl)
    
    const {email , username} = userdata
    
    const existeduser = await User.findOne({$or :[{email},{username}]})

    if(existeduser){
        console.log('user with email or username already exists')
    }
    else{

        const newuser = new User({
            firstname : userdata.firstname,
            lastname : userdata.lastname,
            username : userdata.username,
            email : userdata.email,
            password : userdata.password,
            profileimage : profilepictureurl
        })
    


        try {
            await newuser.save()
            const success = new ApiSuccess("user has been registered successfully",200)
            console.log(success.message,success.statuscode,'user has been successfully regstered on database')
         } catch (error) {
            // throw new ApiError("user had not been registered ! try again", 409)
            console.log('user did not registered')
            }
         
    
    


    }
       
   




}


    export default userhandler