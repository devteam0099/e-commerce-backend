import nodemailer from 'nodemailer'

let mailsender = async(useremail,username,otp)=>{

console.log(useremail,username,otp)
const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port : 587,
    secure : false,
    auth:{
        user :'mohammed.will@ethereal.email',
        pass : 'U7Fxa8n5bNFpD49538'
    }
})

const mailOptions = {
    from : ' "mohammad Abdulah" <ecommercebusiness000@ethereal.email>',
    to : useremail,
    subject : `your otp code for reset password against username ${username} is ${otp}.Never share this code with anyone!`,
    Text : `your otp code for reset password against username ${username} is ${otp}.Never share this code with anyone!`

    
}

  transport.sendMail(mailOptions,(error , info)=>{
    if (error) {
        console.log('error in sending mail')
    } else {
        console.log('mail sent successfully')
    }
})
return otp
}
export default mailsender;