import express from "express";
import cors from "cors";
import dotenv from "dotenv"; 
import { connectDB } from "./config/db.js";
import mongoose from "mongoose";
import userRouter from './routes/userRouter.js';

// تكوين التطبيق
const app = express();
const port = process.env.PORT || 4000;

// تحميل المتغيرات البيئية
dotenv.config();

// استخدام الـ Middleware
app.use(express.json());d
app.use(cors());

// استخدام الـ Router
app.use('/api/users', userRouter);

// الاتصال بقاعدة البيانات
connectDB().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Failed to connect to MongoDB", err);
});

// نقطة نهاية للاختبار
app.get("/", (req, res) => {
    res.send("API Working");
});

// تشغيل الخادم
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
