import { User } from "../models/user.model.js";
import mailsender from "../utils/mailsender.js";
let passwordUpdateController = async(req,res)=>{
    console.log(req.body)
    const { email,username} = req.body;

    
    try{
        const existedUser = await User.findOne({username : username})
        if (existedUser) {
         
         
        const rand = Math.floor(Math.random() * 100000) + 100000
         mailsender(email,username,rand)
        res.send({ code: rand })
        
        console.log('code before sending',rand)
        
       

       

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