const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

const isAuthorized = async (req, res, next) => {
  try {
    // Best practice to extract token wheather token stored in cookies or headers.
    const jwtToken =
      req.cookies.jwt || req.header("Authorization")?.replace("Bearer ", "");
    console.log("Recieve token:", jwtToken);

    if (!jwtToken) {
      return res
        .status(401)
        .json({success: false, message: "Unauthorized: No token provided, Please login" });
    }

    // Verify the JWT token
    const isVerified = jwt.verify(jwtToken, process.env.JWT_TOKEN);

    const user = await User.findOne({ _id: isVerified.userId });

    if (!user) return res.json({ success: false, message: "Invalid user" });

    req.user = user;
    req.ID = user._id;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    res
      .status(401)
      .json({ success: false, message: "Unauthorized: Invalid token" });
  }
};

module.exports = isAuthorized;
