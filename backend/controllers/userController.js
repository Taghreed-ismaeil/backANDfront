import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { sendMail } from '../config/emailConfig.js';

const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

//  Login User 
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        console.log("Login attempt for email:", email);

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "You don't have an account. Please sign up to continue."
            });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

        // Create token with role
        const role = user.accountType;
        console.log("User role:", role);

        const token = createToken(user._id, role);

        res.status(200).json({
            success: true,
            token,
            accountType: role,
            userId: user._id.toString(),
            message: "Login successful"
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            message: "Error during login",
            error: error.message
        });
    }
};

//  Register User
const registerUser = async (req, res) => {
    const { fullName, password, email, accountType, phoneNumber } = req.body;
    try {
        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists." });
        }

        // Validate email and password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email." });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long." });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new userModel({
            name: fullName,
            email,
            password: hashedPassword,
            accountType,
            phoneNumber
        });

        await user.save();

        // Generate token
        const token = createToken(user._id, accountType);

        res.json({ 
            success: true, 
            token,
            accountType: user.accountType,
            userId: user._id.toString(),
            message: "Registration successful"
        });

        // Send welcome email
        const emailContent = `
            <h1>Welcome, ${fullName}!</h1>
            <p>Thank you for registering with us.</p>
            <p>Please click the link below to verify your email:</p>
            <p><a href="${process.env.BASE_URL}/verify-email/${user._id}">Verify Email</a></p>
        `;
        try {
            await sendMail(email, "Welcome to Our Platform!", emailContent);
        } catch (error) {
            console.error("Failed to send welcome email:", error);
        }

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ success: false, message: "Error registering user", details: error.message });
    }
};

//  Get User Profile
const getProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: "No token provided" 
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: "User not found" 
            });
        }

        res.json({ success: true, user });

    } catch (error) {
        console.error("Profile fetch error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error fetching profile" 
        });
    }
};

//  Update User Profile
const updateProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: "No token provided" 
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!req.body.name) {
            return res.status(400).json({ success: false, message: "Name is required" });
        }

        if (req.body.email && !validator.isEmail(req.body.email)) {
            return res.status(400).json({ success: false, message: "Please provide a valid email" });
        }

        // Build update object
        const updateFields = { name: req.body.name };

        if (req.body.phoneNumber) updateFields.phoneNumber = req.body.phoneNumber;
        if (req.body.email) updateFields.email = req.body.email;
        if (req.body.dateOfBirth) updateFields.dateOfBirth = req.body.dateOfBirth;
        if (req.body.gender) updateFields.gender = req.body.gender;
        if (req.body.location) updateFields.location = req.body.location;
        if (req.body.street) updateFields.street = req.body.street;
        if (req.body.apartmentType) updateFields.apartmentType = req.body.apartmentType;

        // Update user profile
        const updatedUser = await userModel.findByIdAndUpdate(
            decoded.id,
            updateFields,
            { new: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({ 
                success: false, 
                message: "User not found" 
            });
        }

        res.json({ success: true, user: updatedUser });

    } catch (error) {
        console.error("Profile update error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error updating profile" 
        });
    }
};

export { loginUser, registerUser, getProfile, updateProfile };