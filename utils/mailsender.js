import nodemailer from 'nodemailer'

let mailsender = async(useremail)=>{


const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port : 587,
    secure : false,
    auth:{
        user :'saige.crona77@ethereal.email',
        pass : 'nQjfE5p9nhdZbQv3fB'
    }
})

const mailOptions = {
    from : ' "mohammad Abdulah" <ecommercebusiness000@ethereal.email>',
    to : useremail,
    subject : 'this is testing mail using ethereal',
    Text : 'your configuration has been done for testing mail'

    
}

  transport.sendMail(mailOptions,(error , info)=>{
    if (error) {
        console.log('error in sending mail')
    } else {
        console.log('mail sent successfully')
    }
})
}
export default mailsender;