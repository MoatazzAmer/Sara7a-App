import mongoose from "mongoose";


export const dbConnection = mongoose.connect('mongodb://localhost:27017/Sara7a').then(()=>{
    console.log('database Connected Successfuly with Server..');
}).catch(()=>{
    console.log('Error Ocuure In Database');
})