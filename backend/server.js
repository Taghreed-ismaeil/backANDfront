import 'dotenv/config';    // ➡️ هذا يحمّل كل متغيرات .env في process.env
import express from "express";
import cors from "cors";
import dotenv from "dotenv"; 
import { connectDB } from "./config/db.js";
import userRouter from './routes/userRouter.js';
import 'dotenv/config';
// تكوين التطبيق
const app = express();
const port = process.env.PORT || 4000;

// تحميل المتغيرات البيئية
dotenv.config();

// استخدام الـ Middleware
app.use(express.json());
app.use(cors());

// الاتصال بقاعدة البيانات
connectDB();
// ✅ استخدم راوتر المستخدم هنا:
app.use('/api/users', userRouter); // مثال: POST /api/users/login
// نقطة نهاية للاختبار
app.get("/", (_req, res) => {
    res.send("API Working");
});

// تشغيل الخادم
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});