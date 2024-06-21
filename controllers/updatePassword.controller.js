import { User } from "../models/user.model.js";
let passwordUpdateController = async(req,res)=>{
    console.log(req.body)
    const { userdata: { email, username } } = req.body;

    
    try{
        const existedUser = await User.findOne({username : username})
        if (existedUser) {
         console.log(existedUser)
         res.send(existedUser)
        }
        else{
            console.log('account did not match')
            res.send('account does not exist on this username')    
                  
        }
    }
    catch(error) {
    console.log(error)
     res.send('account does not exist on this username')    
   }
}
export default passwordUpdateController