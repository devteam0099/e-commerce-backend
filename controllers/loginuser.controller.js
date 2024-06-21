import { User } from "../models/user.model.js";

let loginUserController = async(req,res)=>{
    console.log('login function executed',req.body)
   
    const {username,password} = req.body
    const finduser = await User.findOne({username : username})
 
    if(finduser){
        console.log(finduser)
        if(finduser.password === password){
            console.log('user loggedin successfully')
            const userinfo = {...finduser.toObject(),password : undefined}
            res.send(userinfo)
        }
        else{
            console.log('incorrect password')
        }

       
    }
    else{
        console.log('username does not exists')
        res.status(404).json({ message: 'User not found' })
    }
}
export  default loginUserController
