import { Schema, model } from "mongoose";




const schema = new Schema({
    userName:String,
    email :String,
    password:String,
    otp:String,
    otpExpire:Date,
    role :{
        type:String,
        enum:['user' , 'admin'],
        default :'user'
    },
    isVerifed : {
        type :Boolean,
        default : false
    }
},{
    versionKey:false,
    timestamps:{updatedAt:false}
});

export const User = model('User',schema);