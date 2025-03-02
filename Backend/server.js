const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/userRoute");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);

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
  app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}...`));
});