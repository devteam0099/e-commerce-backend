import express from 'express'
import { upload } from '../middlewares/sample.middleware.js'
import samplecontroller from '../controllers/sample.controller.js';
import registerUserController from '../controllers/registeruser.controller.js';
import loginUserController from '../controllers/loginuser.controller.js';
import passwordUpdateController from '../controllers/updatePassword.controller.js';
import searchuserController from '../controllers/searchuser.controller.js';
import saveAndUpdateController from '../controllers/saveAndUpdate.controller.js';
import productSaveController from '../controllers/productSave.controller.js';
import displayProductsController from '../controllers/displayProducts.controller.js'
import productsUpdateController from '../controllers/updateproduct.controller.js';
import deleteProductController from '../controllers/deleteproduct.controller.js';
import findStoreController from '../controllers/findstore.controller.js';
import registerStoreController from '../controllers/registerstore.controller.js';
import retrieveShopController from '../controllers/retrievestore.controller.js';
import getProductsController from '../controllers/getproducts.controller.js';
import placeOrderController from '../controllers/placeorder.controller.js';
import searchStoreController from '../controllers/searchStore.controller.js';
import obtainProductsController from '../controllers/obtainProducts.controller.js';
import productByNameController from '../controllers/retrieveProductsByName.controller.js';
const router = express.Router()
const RegisterRoute = express.Router()
const loginRoute = express.Router()
const updateRoute = express.Router()
 const searchRoute = express.Router()   
 const saveAndUpdateRoute = express.Router()
 const productSaveRoute = express.Router()
 const displayProductsRoute = express.Router()
 const productsUpdateRoute = express.Router()
 const deleteProductRoute = express.Router()
 const findStoreRoute = express.Router()
 const registerStoreRoute = express.Router()
 const retrieveStoreRoute = express.Router()
 const getProductsRoute = express.Router()
 const placeOrderRoute = express.Router()
 const searchStoreRoute = express.Router()
 const obtainProductsRoute = express.Router()
 const productByNameRoute = express.Router()

    router.post('/',upload.fields([{
        name : "image1",
        maxCount : 1
    },{
        name : "image2",
        maxCount : 1
    },{
        name : "image3",
        maxCount : 1
     }]), samplecontroller)
       

     
       
        RegisterRoute.post('/register',upload.fields([{
            name: 'profileimage',
            maxCount: 1
           }]),registerUserController)


        loginRoute.post('/login',loginUserController)
        
        updateRoute.post('/change-password',passwordUpdateController)
       
        searchRoute.post('/find-user',searchuserController)
   
        saveAndUpdateRoute.post('/save-pass',saveAndUpdateController)

        productSaveRoute.post('/add-product' , upload.fields([{
            name : 'image1',
            maxCount : 1
        },{
            name : 'image2',
            maxCount : 1
        },{
            name : 'image3',
            maxCount : 1
        },{
            name : 'image4',
            maxCount : 1
        }]), productSaveController)

        displayProductsRoute.post('/find-products' , displayProductsController)

        productsUpdateRoute.put('/update-product',productsUpdateController)

        deleteProductRoute.post('/remove-data',deleteProductController)

        findStoreRoute.post('/find-store',findStoreController)
        
        registerStoreRoute.post('/shop-build',registerStoreController)

        retrieveStoreRoute.post('/access-shop',retrieveShopController)

        getProductsRoute.get('/products-data',getProductsController)

        placeOrderRoute.post('/order-details',placeOrderController)

        searchStoreRoute.post('/store-info',searchStoreController)

        obtainProductsRoute.post('/obtain-products',obtainProductsController)

        productByNameRoute.post('/obtain-products',productByNameController)
   
   export{RegisterRoute}
   export {loginRoute}
   export {updateRoute}
   export {searchRoute}
   export {saveAndUpdateRoute}
   export {productSaveRoute}
   export {displayProductsRoute}
   export {productsUpdateRoute}
   export {deleteProductRoute} 
   export {findStoreRoute}
   export {registerStoreRoute}
   export {retrieveStoreRoute}
   export {getProductsRoute}
   export {placeOrderRoute}
   export {searchStoreRoute}
   export {obtainProductsRoute}
   export {productByNameRoute}
export default router;