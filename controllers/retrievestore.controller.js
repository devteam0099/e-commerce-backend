import { Storemodel } from "../models/registerStore.model.js";

let retrieveShopController = async(req,res)=>{
   
     try {
        const retrievedStore = await Storemodel.findOne({owner : req.body.username})
        console.log(retrievedStore)
        res.send({message : retrievedStore})
     } catch (error) {
        res.send({message : 'error in finding store'})
     }
}
export default retrieveShopController