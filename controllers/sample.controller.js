import uploadImage  from '../utils/image.uloader.js';
import savedatatodb from '../utils/datasave.db.js';


let samplecontroller = (req,res)=>{

    async(request,resp)=>{

        const {username} = request.body
        const imageurls =  await uploadImage(request.files)
        savedatatodb(imageurls, username)
         
       }

}
export default samplecontroller