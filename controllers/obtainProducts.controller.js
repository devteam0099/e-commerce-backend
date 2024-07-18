import { ProductModel } from "../models/productSave.model.js"

let obtainProductsController = async(req,res)=>{
        const {owner,pageNo} = req.body
        console.log(req.body)
        if (owner === null || undefined) {
            res.send({message : 'can not find products as server is unsure which products are to be obtained'})
        } else {
            try {
                const storeProducts = await ProductModel.find({createdBy : owner}).skip(20 * pageNo).limit(20).exec()
                if (storeProducts.length === 0) {
                    res.send({message : "end of results"})
                } else {
                    console.log(storeProducts)
                    res.json(storeProducts)
                }
            } catch (error) {
                res.send({message : "error in finding products"})
            }
        }
}
export default obtainProductsController