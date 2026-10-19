const bcrypt = require("bcrypt");
const User = require("../models/usersModel");
const env = require("../../env");

const SALT_ROUNDS = env.SALT_ROUNDS;

const register = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Create new user (role defaults to 'user')
    const user = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      password: hashedPassword,
      //   role:"admin"
    });
    await user.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration failed:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = register;
