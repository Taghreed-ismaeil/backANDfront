import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

// ✅ إنشاء التوكن
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// ✅ دالة تسجيل الدخول
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user is not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// ✅ دالة إنشاء حساب جديد
const signUpUser = async (req, res) => {
  const { email, password, confirmPassword, phoneNumber, accountType, city } = req.body;


  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "user already exists" });
    }

    // تحقق من صحة الإيميل وقوة كلمة المرور
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "please enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "please enter a strong password" });
    }
    if (password !== confirmPassword) {
      return res.json({ success: false, message: "Passwords do not match" });
    }

    // تشفير كلمة المرور
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // إنشاء مستخدم جديد بكل الحقول
    const newUser = new userModel({
      email,
      password: hashedPassword,
      phoneNumber,
      accountType,
      city
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { loginUser, signUpUser };

