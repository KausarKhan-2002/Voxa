const createTokenAndSaveCookies = require("../jwt/generateToken");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;
    console.log(req.body);

    // If password is not equal to confirm password
    if (password != confirmpassword) {
      return res
        .status(400)
        .json({ message: "Password and confirm password do not match" });
    }

    // findone method takes user data to find in database if exist return true otherwise false
    const user = await User.findOne({ email });

    // If user's email already exists
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }

    // Bcrypt will hash the password that human can't read for security purpose
    const saltValue = 10;
    const hashedPassword = await bcrypt.hash(password, saltValue);

    // This code creates a new user in a MongoDB database using Mongoose (a MongoDB ODM for Node.js).
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // A Mongoose method that saves the user data into MongoDB.
    await newUser.save();

    // Pass the user id and my res
    createTokenAndSaveCookies(newUser._id, res);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check If user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Check Password
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) return res.status(400).json({message: "Incorrect password"})

    // Create Token and set cookie
    createTokenAndSaveCookies(user._id, res);

    res.status(201).json({ message: "User logged in successfully", user });
  } catch (err) {
    console.log("Server err: ", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("jwt")
    res.status(200).json({message: "User logout successfully"})
  }
  catch (err) {
    console.log("Server error: ", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
}