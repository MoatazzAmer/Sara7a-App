import { appError } from "../utils/appError.js";



export  const validate =(schema)=>{
    return (req,res,next)=>{
        let{error} = schema.validate({...req.body ,...req.params,...req.query }, {abortEarly : false});
        if(!error){
            next()
        }else{
            res.json(error.message)
        }
    }
}