import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import userRouter from './src/modules/user/user.router.js';
import { appError } from './src/utils/appError.js';
import { globalError } from './src/middleWare/globalError.js';
import msgRouter from './src/modules/message/message.router.js';
import { catchError } from './src/middleWare/catchError.js';
import { User } from './database/models/user.model.js';


const app = express();
app.use(express.json());





app.use('/user',userRouter)
app.use('/message',msgRouter)





app.post('/verify-otp',catchError(async(req,res,next)=>{
    const{otp ,email}=req.body
    const user = await User.findOne({email})
    const currentTime = new Date();
    if(user.otp !== otp || currentTime > user.otpExpire){
        return next(new appError('Invalid Or Exprie time Otp' , 409))
    };
        await User.findByIdAndUpdate(user,{isVerifed : true },{new :true} );
    user.otp = undefined;
    user.otpExpire = undefined;
    await user.save();
    res.status(201).json({message : "OTP verified successfully" ,user})
}))

app.use('*',(req,res,next)=>{
    next(new appError(`Route Not Found ${req.originalUrl}`, 404))
})
app.use(globalError)
app.listen(3000 , ()=>{
    console.log('Server Running In Port 3000...');
})