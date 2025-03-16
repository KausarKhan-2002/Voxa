const jwt = require("jsonwebtoken");

const createTokenAndSaveCookies = (userId, res) => {
  // Create a token
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "1h",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // XSS
    secure: true,
    sameSite: "strict", // csrf
  });
};

module.exports = createTokenAndSaveCookies