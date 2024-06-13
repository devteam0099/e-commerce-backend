import express from 'express'
import { upload } from '../middlewares/sample.middleware.js'
import samplecontroller from '../controllers/sample.controller.js';
import registerUserController from '../controllers/registeruser.controller.js';
const router = express.Router()
const userRegisterRoute = express.Router()
    
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
       
   userRegisterRoute.post('/register',upload.fields([{
    name: 'profileimage',
    maxCount: 1
   }]),registerUserController)



   
   export{userRegisterRoute}
    
export default router;