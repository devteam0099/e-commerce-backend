import { Storemodel } from "../models/registerStore.model.js"

let registerStoreController = async(req,res)=>{
   console.log(req.body)
 const store =  await Storemodel.findOne({owner : req.body.username})
 if(store){
   console.log(store)
   res.send({message : 'store on this profile already exists'})
 }else{
   try {
      const StoreRegister = await Storemodel.insertMany({
         shopName : req.body.shopname,
         shopAddress : req.body.shopaddress,
         owner : req.body.username
      })
      console.log({message : 'shop has been registered successfully'})
      res.send({message : 'shop has been registered successfully'})
   } catch (error) {
      console.log({message : 'error in creating shop'})
      res.send({message : 'error in creating shop'})
   }
 }
}
export default registerStoreController