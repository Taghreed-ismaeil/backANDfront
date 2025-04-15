import mongoose from "mongoose";

const venusServiceSchema = new mongoose.Schema({
    serviceId: { type: mongoose.Schema.Types.ObjectId, auto: true }, 
    name: { type: String, required: true }, 
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }, 
    description: { type: String }, 
}, { timestamps: true }); 

const venusServiceModel = mongoose.models.venusService || mongoose.model("venusService", venusServiceSchema);

export default venusServiceModel;
