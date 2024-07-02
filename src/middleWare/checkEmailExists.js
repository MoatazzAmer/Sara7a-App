import { User } from "../../database/models/user.model.js";
import { appError } from "../utils/appError.js";
import { catchError } from "./catchError.js";
import bcrypt from 'bcrypt'



export const checkEmail = catchError(async(req,res,next)=>{

    const user = await User.findOne({email : req.body.email});
        if(user){
            return next(new appError("Emali Aleardy Exists.." , 409))
        }
        req.body.password = bcrypt.hashSync(req.body.password , 8);
        next()

})