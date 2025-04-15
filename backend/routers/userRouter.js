import express from "express";
import { loginUser, registerUser, getProfile, updateProfile } from "../controllers/userController.js";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import { sendMail } from '../config/emailConfig.js';

const userRouter = express.Router();

// تسجيل المستخدم
userRouter.post("/register", registerUser);

// تسجيل الدخول
userRouter.post("/login", loginUser);

// الحصول على بيانات البروفايل
userRouter.get("/profile", getProfile);

// تحديث بيانات البروفايل
userRouter.put("/profile", async (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    await updateProfile(req, res);
});

// التحقق من البريد الإلكتروني
userRouter.get('/:id/verify/:token', async (req, res) => {
    try {
        const { id, token } = req.params;

        // التحقق من صحة التوكن
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.id !== id) {
            return res.status(400).json({ error: 'Invalid verification link' });
        }

        const user = await userModel.findById(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (user.verified) {
            return res.json({ message: 'Email is already verified' });
        }

        // تحديث حالة المستخدم إلى "مؤكد"
        user.verified = true;
        await user.save();

        const returnUrl = `${process.env.BASE_URL}`;

        // إرسال بريد تأكيد
        await sendMail(user.email, 'Email Verified', `
            <p>Your email has been successfully verified!</p>
            <p>Click <a href="${returnUrl}">here</a> to return to our website.</p>
        `);

        res.json({ success: true, message: 'Email successfully verified!' });
    } catch (error) {
        console.error('Verification error:', error);
        res.status(500).json({ error: 'Failed to verify email' });
    }
});

// حذف حساب المستخدم
userRouter.delete('/profile', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: "No token provided" 
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        // حذف المستخدم من قاعدة البيانات
        await userModel.findByIdAndDelete(userId);

        res.json({ success: true, message: 'Account deleted successfully' });
    } catch (error) {
        console.error('Error deleting account:', error);
        res.status(500).json({ success: false, message: 'Failed to delete account' });
    }
});

export default userRouter;
