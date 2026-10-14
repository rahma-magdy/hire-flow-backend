import bcrypt from "bcrypt";
import User from "../models/usersModel.js";
import env from "../../env.js";

const SALT_ROUNDS = env.SALT_ROUNDS;

const register = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "User aleardy exists" });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      password: hashedPassword,
      //   role:"admin"
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export default register;
