import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phoneNumber: { type: String ,required:true},
    dateOfBirth: { type: String },
    gender: { type: String },
    location: { type: String }, 
},{minimize:false, timestamps: true})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)
export default userModel;