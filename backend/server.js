import express from "express";
import cors from "cors";
import dotenv from "dotenv"; 
import { connectDB } from "./config/db.js";
import mongoose from "mongoose";

import userRouter from "./routes/userRouter.js";

// تحميل المتغيرات البيئية
dotenv.config();

// تكوين التطبيق
const app = express();
const port = process.env.PORT || 4000;

// الاتصال بقاعدة البيانات


// استخدام الـ Middleware
app.use(express.json());
app.use(cors());




// استخدام الـ Router
app.use('/api/users', userRouter);



// نقطة نهاية للاختبار
app.get("/", (req, res) => {
    res.send("API Working");
});

// تشغيل الخادم


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server started on http://localhost:${port}`);
        console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
    });
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});

