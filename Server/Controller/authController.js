import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel";

// Functions to control Register, Login, Logout etc

export const register = async (req, res) => {
  let { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ success: false, message: "missing Details" });
  }
  try {
    const existingUser = await userModel.findOne(email);

    if (existingUser) {
      return res.json({ success: false, message: "User Already Exist's " });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const user = new userModel({ name, email, password: hashedpassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    user.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "Production",
      samesite: process.env.NODE_ENV == "Production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // converted in ms
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
