import bcrypt from "bcrypt";
import { User } from "../../../database/models/user.model.js";
import { catchError } from "../../middleWare/catchError.js";
import jwt from 'jsonwebtoken';
import { appError } from "../../utils/appError.js";
import { sendEmail } from "../../Email/sendingEmail.js";

const signUp = catchError(async(req,res,next)=>{
    

    const otp= Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpries =  new Date(Date.now() + 3 * 60000);

    const user = new User({...req.body ,otp ,otpExpries});
    await user.save()
    sendEmail(req.body.email , req.body.userName , otp);

    user.password = undefined;
    res.status(201).json({message :"Success Register .." ,user})
});



const logIn = catchError(async(req,res,next)=>{

    const user = await User.findOne({email : req.body .email});

    if(!user ||  !bcrypt.compareSync(req.body.password , user.password )){

        return next(new appError('Incorrect Email Or Password ' ,409))
    }else if ( user.isVerifed === false){
        return next(new appError('You must be Verifed Email' ,409))
    }
    jwt.sign({userId : user._id , name : user.userName ,},'MoatazAmer',(err,token)=>{
        res.status(201).json({Message :"Success Login" ,token})
    })
})


export{
    signUp,
    logIn
}