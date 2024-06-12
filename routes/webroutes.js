import express from 'express'
import { upload } from '../middlewares/sample.middleware.js'
import samplecontroller from '../controllers/sample.controller.js';
const router = express.Router()
    
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
       

    
export default router;