import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import transporter from "../config/nodemailer.js";

// Functions to control Register, Login, Logout etc


// register

export const register = async (req, res) => {
  let { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ success: false, message: "missing Details" });
  }
  try {
    const existingUser = await userModel.findOne({email});

    if (existingUser) {
      return res.json({ success: false, message: "User Already Exist's " });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const user = new userModel({ name, email, password: hashedpassword });
    await user.save();

    // JWT token creating
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "Production",
      samesite: process.env.NODE_ENV == "Production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // converted in ms
    });

      // confirmation mail functionality 

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject:"Welcome to Sumit's Auth App",
      text:`
        Hello ${name} !,
        Welcome to Sumit's Auth App. Your Account has been created with email id: ${email}.
      `
    }

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: "Welcome Email sent successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// Login Function

export const login = async (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    return res.json({ success: false, message: "Email & Password Required" });
  }
  try {
    const user = await userModel.findOne({email});
    if (!user) {
      return res.json({ sucess: false, message: "Invalid Email Address" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Password" });
    }

    //Creating JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "Production",
      samesite: process.env.NODE_ENV == "Production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // converted in ms
    });
    
    return res.json({ success: true, message:"You Logged In !!" });

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};


// LogOut Function 

export const logout = async (req, res)=>{
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === "Production",
      samesite: process.env.NODE_ENV == "Production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    
    res.json({success:true, message: 'Logged Out'});

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}


// Verification OTP to User email 


export const sendVerifyOtp = async (req, res)=>{

  try {

    const {userId} = req.body; 

    const user = await userModel.findById(userId)

    if(user.isAccountVerfied){
      return res.json({success:false, message:"user is already Verified"});
    }

    // random OTP (gives 6 digit number)
   const otp =String(Math.floor(100000 + Math.random() * 900000 ));

    user.verifyOtp = otp; 
    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000 ;
    user.save();


    // sending a mail
    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject:"Account Verification OTP",
      text:`
        Your Account Verification OTP is ${otp}. Confirm your account using this OTP.
      `
    }

    await transporter.sendMail(mailOption);

    return res.json({success:true, message: "Verification OTP is Sent on Email"});
    

  } catch (error) {
    return res.json({success:false, message:error.message});
  }

}


export const verifyEmail = async (req, res)=>{

  const {userId, otp} = req.body; 

  if (!userId || !otp){
    return res.json({success: true, message:"Missing Details"})
  }

  try {
    const user = await userModel.findById(userId);

    if(!user){
      return res.json({success:false, message:"User Not Found !"});
    }

    if(user.verifyOtp === '' || user.verifyOtp !== otp){
      return res.json({success:false, message:"Invalid Otp, Retry again!"});
    }

    if(user.verifyOtpExpireAt < Date.now()){
      return res.json({success:false, message:"OTP got Expired !"});
    }

    
    user.isAccountVerfied = true;
    user.verifyOtp = '';
    user.verifyOtpExpireAt = 0;

    user.save();
    return res.json({success:true, message:"Email Verified Successfully !"})


  } catch (error) {
    return res.json({success:false, message: error.message})
  }

};

