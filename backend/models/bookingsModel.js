import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    bookingId: { type: mongoose.Schema.Types.ObjectId, auto: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "venusService", required: true }, // معرف الخدمة
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }, // معرف المستخدم
    status: { 
        type: String, 
        enum: ["Pending", "Confirmed", "Cancelled"], 
        default: "Pending" 
    }, // حالة الحجز (افتراضيًا "Pending")
    bookingDate: { type: Date, required: true } // تاريخ الحجز
}, { timestamps: true });

const bookingModel = mongoose.models.booking || mongoose.model("booking", bookingSchema);

export default bookingModel;
