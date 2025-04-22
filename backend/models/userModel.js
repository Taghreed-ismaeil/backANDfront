import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phoneNumber: { type: String },
    accountType: {type: String, required: true, },
    city: { type: String ,required:true},
   
},{minimize:false})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)
export default userModel;
