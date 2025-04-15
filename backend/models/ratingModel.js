import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
    ratingId: { type: mongoose.Schema.Types.ObjectId, auto: true }, 
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }, 
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "venusService", required: true }, 
    ratingValue: { type: Number, required: true, min: 1, max: 5 }, // قيمة التقييم من 1 إلى 5
    comment: { type: String }, 
}, { timestamps: true });//اضافة حقل في الداتا بيس 

const ratingModel = mongoose.models.rating || mongoose.model("rating", ratingSchema);

export default ratingModel;
