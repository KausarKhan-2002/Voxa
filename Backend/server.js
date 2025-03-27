const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/userRoute");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const { messageRoutes } = require("./src/routes/messageRoute");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECURITY_KEY,
});

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/user", userRoutes);
app.use("/message", messageRoutes);

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

// Database connection function
async function connectionDB() {
  try {
    // If mongoose already connected from db
    if (mongoose.connection.readyState === 1) {
      console.log("🟢 Already connected to MongoDB");
      return;
    }

    await mongoose.connect(URI); // No need for deprecated options
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
}

connectionDB();

// Handle MongoDB disconnects
mongoose.connection.on("disconnected", () => {
  console.log("🔴 MongoDB disconnected! Trying to reconnect...");
  connectionDB();
});

// Handling MongoDB Errors
mongoose.connection.on("error", (err) => {
  console.error("⚠️ MongoDB connection error:", err.message);
});

// Start the server only after the DB is connected
mongoose.connection.once("open", () => {
  app.listen(PORT, () =>
    console.log(`🚀 Server is running on PORT ${PORT}...`)
  );
});
