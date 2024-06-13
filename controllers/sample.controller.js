import uploadImage  from '../utils/image.uloader.js';
import savedatatodb from '../utils/datasave.db.js';


let samplecontroller = async(req,res)=>{

    

        const {username} = req.body
        const imageurls =  await uploadImage(req.files)
        savedatatodb(imageurls, username)
         
       

}
export default samplecontroller