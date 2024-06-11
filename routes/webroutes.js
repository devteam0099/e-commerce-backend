import express from 'express'
import { upload } from '../middlewares/sample.middleware.js'
import uploadImage  from '../utils/image.uloader.js';
import savedatatodb from '../utils/datasave.db.js';
const router = express.Router()
    
    router.post('/',upload.array('images',3), async(req,res)=>{

        const {username} = req.body
        const imageurls =  await uploadImage(req.files)
        savedatatodb(imageurls, username)
          
       })
       

    
export default router;