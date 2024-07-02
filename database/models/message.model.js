

import mongoose, { Schema, model } from "mongoose";




const schema = new Schema({
    content:String,
    receiverId:mongoose.Types.ObjectId
},{
    versionKey:false,
    timestamps:{updatedAt: false}
});

export const Message = model('Message',schema);