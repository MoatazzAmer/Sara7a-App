import { Message } from "../../../database/models/message.model.js";
import { catchError } from "../../middleWare/catchError.js";



const addMesg = catchError(async(req,res,next)=>{

    const mesg = await Message.insertMany(req.body);
    
    res.status(201).json({message : "Success Added" , mesg})
});

const getAllMess = catchError(async(req,res,next)=>{

    const mesg = await Message.find({receiverId:req.user.userId});
    res.status(201).json({message :"Success " ,mesg})
})

const deletemesg = catchError(async(req,res,next)=>{

    await Message.findByIdAndDelete(req.params.id);
    res.status(201).json({message : "Success Deleted .."})
})
export{
    addMesg,
    getAllMess,
    deletemesg
}