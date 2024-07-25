import { ProductModel } from "../models/productSave.model.js";

let obtainCartsController = async(req,res)=>{
        const {username,pageNo} = req.body
        try {
            const obtainCarts = await ProductModel.find({$and : [{cart : 'yes'},{createdBy : username}]})
            if (obtainCarts.length === 0) {
                res.send({message : 'end of results'})
            } else {
                res.json(obtainCarts)
            }
        } catch (error) {
            res.send({message : 'error in finding carts on server site'})
        }
}
export default obtainCartsController