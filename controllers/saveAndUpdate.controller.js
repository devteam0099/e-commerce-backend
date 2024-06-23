import { User } from "../models/user.model.js"

let saveAndUpdateController = async(req,res)=>{
     const {username,password} = req.body
    const updateuser = await User.findOne({username : username})
    if(updateuser){
        await User.updateOne({username : username},{$set : {password : password}},{upsert : false})
        .then((respuser)=>{res.send({message : "password has been updated successfully"})})
        .catch((erruser)=>{res.send({message : "error in updating password"})})
    }
    else{res.send({message : "No account found on this username"})}
    
}
export default saveAndUpdateController