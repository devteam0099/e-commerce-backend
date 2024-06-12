import { register } from "../models/sample.model.js";
let savedatatodb =async (imageurl,usernamecs)=>{
  const employee = new register({
   name : usernamecs,
   product1 : imageurl[0],
   product2 : imageurl[1],
   product3 : imageurl[2]
  
 })

 try{
   await employee.save()
   console.log("user created successfully")
 }
 catch{
    console.log("user could not register! try again")
 }
        
}
export default savedatatodb;