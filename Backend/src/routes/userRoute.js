const express = require("express");
const {
  signup,
  login,
  logout,
  updateProfilePicture,
  updateUserInformation,
  checkAuthorization,
} = require("../controllers/userController");
const isAuthorized = require("../middlewares/isAuthorized");
const route = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

route.post("/signup", signup);
route.post("/login", login);
route.post("/logout", isAuthorized, logout);
route.patch(
  "/update-profile",
  isAuthorized,
  upload.single("profileImage"),
  updateProfilePicture
);
route.get("/authorized", isAuthorized, checkAuthorization)
route.patch("/update-user", isAuthorized, updateUserInformation);

module.exports = route;
