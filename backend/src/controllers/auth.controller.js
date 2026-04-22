import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

async function sendTokenResponse(user, res, message) {
  const token = jwt.sign(
    {
      id: user._id,
    },
    config.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  res.cookie("token", token);

  res.status(200).json({
    message,
    success: true,
    user: {
      id: user._id,
      name: user.name,
      contact: user.contact,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    },
  });
}

export const register = async (req, res) => {
  const { email, contact, password, fullName, isSeller } = req.body;

  const isEmailExist = await userModel.findOne({
    $or: [{ email }, { contact }],
  });

  if (isEmailExist) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const user = await userModel.create({
    email,
    contact,
    password,
    fullName,
    role: isSeller == true ? "seller" : "buyer",
  });

  await sendTokenResponse(user, res, "User registered successfully");
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      messsage: "Invalid email or password",
    });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid email, email or password",
    });
  }

  await sendTokenResponse(user, res, "User logged in successfully");
};
