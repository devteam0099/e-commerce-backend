import { v2 as cloudinary } from "cloudinary";

 let imageurl = []


async function uploadImage(images) {

    

     await Promise.all( images.map(async (item , index) => {
        const originalname = item.originalname;
        return await cloudinary.uploader.upload('./public/' + originalname, { public_id: originalname }).then((result)=>{
          imageurl.push( result.secure_url)
          console.log(imageurl)
          console.log("image uploaded successfully")})
        .catch((error) => {
          console.log(error);
          
          
        });
      }));

      return imageurl
}

export default uploadImage

