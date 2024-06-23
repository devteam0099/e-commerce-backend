import { User } from "../models/user.model.js"
let searchuserController = async(req,res)=>{
     console.log(req.body)
     const {cred} = req.body
     
    const searchresult = await User.findOne({$or : [{username : cred},{email : cred}]})
    if (searchresult) {
    
        res.send( searchresult)
    } else {
        console.log('could not find user')
        res.send({error : "account does not exist"})
    }
}
export default searchuserController