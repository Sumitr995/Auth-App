import express from 'express'
import { isAuthenticated, login, logout, register, resetPassword, sendResetotp, sendVerifyOtp, verifyEmail } from '../Controller/authController.js';
import userAuth from '../middleware/userAuth.js';


const authRoutes = express.Router();

authRoutes.post('/register',register);
authRoutes.post('/login',login);
authRoutes.post('/logout',logout);
authRoutes.post('/send-otp',userAuth, sendVerifyOtp);
authRoutes.post('/verifyEmail',userAuth, verifyEmail);
authRoutes.post('/is-auth',userAuth, isAuthenticated);
authRoutes.post('/sent-reset-otp',sendResetotp);
authRoutes.post('/reset-password',resetPassword);

export default authRoutes;