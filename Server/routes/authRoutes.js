import express from 'express'
import { login, logout, register, sendVerifyOtp, verifyEmail } from '../Controller/authController.js';
import userAuth from '../middleware/userAuth.js';


const authRoutes = express.Router();

authRoutes.post('/register',register);
authRoutes.post('/login',login);
authRoutes.post('/logout',logout);
authRoutes.post('/send-otp',userAuth, sendVerifyOtp);
authRoutes.post('/verifyEmail',userAuth, verifyEmail);

export default authRoutes;