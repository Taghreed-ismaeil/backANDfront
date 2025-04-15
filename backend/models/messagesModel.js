import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    messageId: { type: mongoose.Schema.Types.ObjectId, auto: true }, // معرف الرسالة (يتم إنشاؤه تلقائيًا)
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }, // معرف المرسل
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }, // معرف المستقبل
    messageText: { type: String, required: true }, // نص الرسالة
}, { timestamps: true }); // يتم إنشاء `createdAt` تلقائيًا

const messagesModel = mongoose.models.message || mongoose.model("message", messagesSchema);

export default messagesModel;
