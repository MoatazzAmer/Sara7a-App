

export const globalError = (err ,req,res,next)=>{
    let code = err.statusCode || 500;
    res.status(code).json({message : "Occure Error..",error:err.message , code , stack:err.stack});
};