import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  accountType: { type: String, required: true },
  city: { type: String, required: true },
  gender: { type: String, required: true }, // 🔥 أضفنا حقل الجندر
}, { minimize: false });

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
