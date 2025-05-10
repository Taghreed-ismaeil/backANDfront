import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

const createToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET غير معرف في .env');
  }
  return jwt.sign({ id }, process.env.JWT_SECRET);
};



// ✅ تسجيل الدخول
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
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        city: user.city,
        gender: user.gender, // 🔥 رجع الجندر كمان
      }
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// ✅ إنشاء حساب جديد
const signUpUser = async (req, res) => {
  console.log('Incoming Request Body:', req.body);

  const { name, gender, email, password, confirmPassword, phoneNumber, city } = req.body;

  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "user already exists" });
    }

    // التحقق من صحة البيانات
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "please enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "please enter a strong password" });
    }

    if (password !== confirmPassword) {
      return res.json({ success: false, message: "Passwords do not match" });
    }

    if (!gender) {
      return res.json({ success: false, message: "Please select gender" });
    }

    // تشفير كلمة المرور
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // إنشاء مستخدم جديد بعد التحقق من صحة البيانات
    const newUser = new userModel({
      name,
      gender,
      email,
      password: hashedPassword,
      phoneNumber,
      city,
      accountType: "user" // 👈 اضفناها
    });
console.log(newUser);

    // حفظ المستخدم الجديد في قاعدة البيانات
    const user = await newUser.save();

    // إنشاء التوكن
    const token = createToken(user._id);

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        city: user.city,
        gender: user.gender, // 🔥 رجعنا الجندر بالرد
      }
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};
const allUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};




export { loginUser, signUpUser, allUsers };