import jwt from 'jsonwebtoken';
import { catchError } from './catchError.js';
import { appError } from '../utils/appError.js';



export const verifyToken = catchError(async(req,res,next)=>{
    const {token} =req.headers;

    jwt.verify(token ,'MoatazAmer',(err,decoded)=>{
        if(err) {
            return next(new appError('Invalid Token',401))
        }

        req.user = decoded;
        next()
    })
})