const createTokenAndSaveCookies = require("../jwt/generateToken");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECURITY_KEY,
});

exports.signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phoneNumber } = req.body;
    console.log("top: ", req.body);

    // If password is not equal to confirm password
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password do not match",
      });
    }

    // findone method takes user data to find in database if exist return true otherwise false
    const user = await User.findOne({ email });

    // If user's email already exists
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    // Bcrypt will hash the password that human can't read for security purpose
    const saltValue = 10;
    const hashedPassword = await bcrypt.hash(password, saltValue);

    // This code creates a new user in a MongoDB database using Mongoose (a MongoDB ODM for Node.js).
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    // A Mongoose method that saves the user data into MongoDB.
    await newUser.save();

    console.log("bottom: ", req.body);

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials please check your email and password",
      });
    }

    // Check Password
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword)
      return res.status(400).json({
        message: "Invalid credentials please check your email and password",
      });

    // Create Token and set cookie
    createTokenAndSaveCookies(user._id, res);

    res
      .status(201)
      .json({ success: true, message: "User logged in successfully", user });
  } catch (err) {
    console.log("Server err: ", err.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logout successfully" });
  } catch (err) {
    console.log("Server error: ", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateProfilePicture = async (req, res) => {
  try {
    console.log("Recive file:", req.file);
    console.log("Description:", req.body.description);

    if (!req.file) {
      return res
        .status(400)
        .json({ succes: false, message: "No image provided!" });
    }

    // ✅ Convert buffer to Base64 URL
    const base64Image = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;

    // Upload in cloudinary
    const uploadRes = await cloudinary.uploader.upload(base64Image, {
      folder: "chatify_profile_picture",
    });

    // console.log(uploadRes);

    const findUser = await User.findByIdAndUpdate(
      req.ID,
      {
        profilePicture: uploadRes.secure_url,
        description: req.body.description || "Hii there, I am using Chatify",
      },

      { new: true }
    );

    if (!findUser)
      return res.status({
        success: false,
        message: "You are not athorized, please login",
      });

    res.json({ message: "Profile updated", user: findUser });
  } catch (err) {
    console.error("Error updating profile image:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getProfileDetails = (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status({
        success: false,
        message: "You are not authorized, please login",
      });
    }

    res
      .status(201)
      .json({ success: true, message: "User retrieved successfully", user });
  } catch (err) {
    res.status(500).json({ sucess: false, message: err.message });
  }
};

exports.updateUserInformation = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check If there is not valid updated data
    if (!name && !description) {
      return res
        .status(400)
        .json({ success: false, message: "Please update credentials first" });
    }

    // only update the field which is updated
    const updatedFields = {};
    if (name !== req.user.name) updatedFields.name = name;
    if (description !== req.user.description)
      updatedFields.description = description;

    // If there is not updating field avoid DB call
    if (Object.keys(updatedFields).length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No updated data" });
    }

    const updatedUser = await User.findByIdAndUpdate(req.ID, updatedFields, {
      new: true,
    });

    req.user = updatedUser; // keep the updated user data in req.user

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.log("error", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};
