import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.json({ error: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashed, role });

    res.json({ message: "Registered successfully", user: newUser });
  } catch (err) {
    res.json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ error: "Invalid email or password" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.json({ error: "Invalid email or password" });

    res.json({ message: "Login success", user });
  } catch (err) {
    res.json({ error: err.message });
  }
};
