import express, { urlencoded } from 'express';
import cors from 'cors'
import dbconnection from './utils/db.connection.js';
import cloudinaryConfig from './utils/cloudinary.config.js';
import corsConfig from './utils/cors.config.js';
import router from './routes/webroutes.js';
import { upload } from './middlewares/sample.middleware.js';
 import uploadImage  from './utils/image.uloader.js';
 import savedatatodb from './utils/datasave.db.js';
const app = express();
const port = 3000;


app.use(urlencoded({extended: true}))
app.use(cors(corsConfig()))
dbconnection();
cloudinaryConfig();

app.use('/',router)

//  app.post('/',upload.array('images',3), async(req,res)=>{

//   const {username} = req.body
//   const imageurls =  await uploadImage(req.files)
//   savedatatodb(imageurls, username)
   
//  })





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

