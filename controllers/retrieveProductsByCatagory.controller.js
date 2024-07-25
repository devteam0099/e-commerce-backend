import { ProductModel } from "../models/productSave.model.js"

let productByCatagoryController = async(req,res)=>{
        const {catagory,pageNo} = req.body
        console.log(req.body)
        if (catagory === null || undefined) {
            res.send({message : 'can not find products as server is unsure which products are to be obtained'})
        } else {
            try {
                const storeProducts = await ProductModel.find({productCatagory : catagory}).skip(20 * pageNo).limit(20).exec()
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
export default productByCatagoryController