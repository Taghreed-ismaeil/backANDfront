import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://lebashabello4:lltd@cluster0.o90ktxq.mongodb.net/ehjezli?retryWrites=true&w=majority').then(()=>console.log("DB Connected"));
}