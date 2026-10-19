const bcrypt = require("bcrypt");

const User = require("../models/usersModel");
const env = require("../../env");
const jwt = require("jsonwebtoken");

const SECRET_KEY = env.JWT_SECRET;
const EXPIRES_IN = env.JWT_EXPIRES_IN;

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email }, { __v: 0 });

    if (!user) {
      return res.status(401).json({ message: "invalid email or password" });
    }
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "invalid email or password" });
    }
    // Generate token
    const token = jwt.sign({ userId: user._id, role: user.role }, SECRET_KEY, {
      expiresIn: EXPIRES_IN,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    return res.status(200).json({
      message: "User logged in successfully",
      data: { id: user._id, role: user.role },
    });
  } catch (err) {
    console.error("Login failed:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = login;
