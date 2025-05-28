import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import generateAvatar from "../utils/generateAvatar.js";


const registerUser = async (req, res) => {
  try {
    const { name, email, password, registrationNumber } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }


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
    console.error("Error during registration:", error);
    res.status(500).json({ message: error.message || "Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;


    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

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
    console.error("Login error:", error);
    res.status(500).json({ message: error.message || "Server Error" });
  }
};


const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error("Fetch user error:", error);
    res.status(500).json({ message: error.message || "Server Error" });
  }
};



const updateUser = async (req, res) => {
  try {
    const userId = req.user.userId;

    const allowedFields = ["name", "avatar", "registrationNumber"];
    const updates = {};

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields provided for update",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Update user error:", error);
    res.status(500).json({ message: error.message || "Server Error" });
  }
};


const deleteUser = async (req, res) => {

  try {

    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.remove();

    res.status(200).json({
      success: true,
      message: "User deleted successfully",

    });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ message: error.message || "Server Error" });
  }
}

export { registerUser, loginUser, getUser,updateUser , deleteUser };
