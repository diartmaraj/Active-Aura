// controllers/userController.js

import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import {generateTokenAndSetCookie} from '../utils/generateTokenAndSetCookie.js';
import { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail, sendResetSuccessEmail } from '../mailtrap/emails.js';

export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    try {
        if(!email || !password || !firstName || !lastName){
            throw new Error("All fields are required");
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({success:false, message: 'Email already in use' });
        }

        const hashedPassword =  await bcrypt.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new User({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            verificationToken: verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,

        })
        
        await user.save();

        generateTokenAndSetCookie(res,user._id)

        await sendVerificationEmail(user.email, verificationToken);

        res.status(201).json({ message: 'User created successfully', user: {
            ...user._doc,
            password: undefined
        } });
    } catch (error) {
        res.status(400).json({success: false, message: error.message });
    }
};

export const verifyEmail = async (req, res) => {
    const {code} = req.body;
    try {
        const user =  await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now()}
        })
        if(!user){
            return res.status(400).json({success: false, message: "Invalid or expired verification code"})
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save();

        await sendWelcomeEmail(user.email, user.firstName)

        res.status(200).json({success: true, message: "Email verified successfully",
            user : {
                ...user._doc,
                password: undefined,
            }
    })

    } catch (error) {
        
    }
}

export const logout = async (req,res) => {
    res.clearCookie("token");
    res.status(200).json({success: true, message: "Logged out succesfully"});
}


export const login = async (req, res) => {
   const {email, password} = req.body;
   try {
    const user = await User.findOne({email});
    if(!user) {
        return res.status(400).json({success: false, message: "Invalid credentials"});
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({success: false, message: "Invalid credentials"});

    }
    if (!user.isVerified) {
        return res.status(400).json({success: false, message: "User not verified"});
    }

    
    generateTokenAndSetCookie(res, user._id);

    user.lastlogin = new Date();
    await user.save();

    res.status(200).json({
        success: true,
        message: "Logged in successfully",
        user: {
            ...user._doc,
            password:undefined
        }
    });

   } catch (error) {
    console.log("Error in login", error);
    return res.status(400).json({success: false, message: error.message});

   }
};

export const forgotPassword = async (req, res) => {
    const {email} = req.body;
    try {
        const user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({success: false, message: "User not found"});
        }
        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; //1 hour
        
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpiresAt = resetTokenExpiresAt;

        await user.save();

        await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);

        res.status(200).json({success: true, message: "Password reset link sent to your email"});
    } catch (error) {
        console.log("Error in forgotPassword", error);
        res.status(400).json({success: false, message: error.message})
        
    }
};

export const resetPassword = async (req, res) => {
    try {
        const {token} = req.parms;
        const {password} = req.body;

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: {$gt: Date.now()},
        })

        if(!user){
            return res.status(400).json({success: false, message: "Invalid or expired reset token"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;

        await user.save();
        sendResetSuccessEmail(user.email);

        res.status(200).json({success: true, message: "Password reset successful"});
    } catch (error) {
        console.log("Error in resetPassword", error);
        res.status(400).json({success: false, message: error.message});
        
    }
}

export const checkAuth =  async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(400).json({success: false, message: "User not found"});
        }

        res.status(200).json({success: true, user})
    } catch (error) {
        
    }
}


