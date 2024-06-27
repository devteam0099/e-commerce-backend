import express from 'express'
import { upload } from '../middlewares/sample.middleware.js'
import samplecontroller from '../controllers/sample.controller.js';
import registerUserController from '../controllers/registeruser.controller.js';
import loginUserController from '../controllers/loginuser.controller.js';
import passwordUpdateController from '../controllers/updatePassword.controller.js';
import searchuserController from '../controllers/searchuser.controller.js';
import saveAndUpdateController from '../controllers/saveAndUpdate.controller.js';
import productSaveController from '../controllers/productSave.controller.js';
const router = express.Router()
const RegisterRoute = express.Router()
const loginRoute = express.Router()
const updateRoute = express.Router()
 const searchRoute = express.Router()   
 const saveAndUpdateRoute = express.Router()
 const productSaveRoute = express.Router()
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

   
   export{RegisterRoute}
   export {loginRoute}
   export {updateRoute}
   export {searchRoute}
   export {saveAndUpdateRoute}
   export {productSaveRoute}
    
export default router;