import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import generateAvatar from "../utils/generateAvatar.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password, registrationNumber } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10); 
    const avatar = generateAvatar(name); 

    const newUser = new User({
      name,
      email,
      password: hashedPassword, 
      registrationNumber,
      avatar,
    });

    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "You are registered successfully" });
  } catch (error) {
    console.error("Error while Registration", error);
    res.status(500).json({ message: error.message});
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { userId: user._id, email },
      process.env.JWT_SECRET,
      { expiresIn: "2d" } 
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.log("Login error", error);
    res.status(500).json({ message: error.message });
  }
};

export { loginUser, registerUser };
