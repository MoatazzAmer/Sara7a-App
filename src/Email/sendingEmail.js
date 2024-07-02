import nodemailer from 'nodemailer'
import { catchError } from '../middleWare/catchError.js'

export const sendEmail = catchError(async(email,userName ,otp)=>{
    const transporter = nodemailer.createTransport({
        service :'gmail',
        auth: {
        user: "moatazamer.111@gmail.com",
        pass: "mjuzoogoyquthuxr",
        },
    });
    
    const info = await transporter.sendMail({
        from: `"Hello Mr ${userName} 👻" <moatazamer.111@gmail.com>`, // sender address
        to: email,
        subject: "Confirm Email", // Subject line
        text: `Hello Mr ${userName}`, // plain text body
        html: `your OPT Code Is ${otp}`, // html body
    });
    
    console.log("Message sent: %s", info.messageId);
})
