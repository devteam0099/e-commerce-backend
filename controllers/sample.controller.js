import uploadImage  from '../utils/image.uloader.js';
import savedatatodb from '../utils/datasave.db.js';
import mailsender from '../utils/mailsender.js';


let samplecontroller = async(req,res)=>{

    

        const {username} = req.body
      //  const imageurls =  await uploadImage(req.files)
        //savedatatodb(imageurls, username)
        mailsender(username)
         
       

}
export default samplecontroller