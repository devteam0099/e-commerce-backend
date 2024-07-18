import { Storemodel } from "../models/registerStore.model.js";

let searchStoreController = async(req,res)=>{
   
    const {storeValue} = req.body
    if (storeValue === "") {
        res.send({message : 'please enter valid value to search store'})
    } else {
        try {
            const shopInfo = await Storemodel.collection.findOne({shopName : storeValue})
            if(shopInfo === null){
                res.send({message : 'no store found'})
            }
            console.log(shopInfo)
            res.json(shopInfo)
        } catch (error) {
            console.log({message : 'error in searching store on server site'})
            res.send({message : 'error in searching store on server site'})
        }
    }
}
export default searchStoreController