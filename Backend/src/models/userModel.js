// This line imports Mongoose, which is an Object Data Modeling (ODM) library for MongoDB.
// It allows us to define schemas, interact with MongoDB, and perform operations like
// creating, reading, updating, and deleting data.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true, trim: true },
    phoneNumber: { type: Number, require: true, trim: true, maxLength: 12 },
    description: {
      type: String,
      trim: true,
      default: "Hii there, I am using Chatify",
    },
    profilePicture: { type: String, trim: true, default: "" },
  },
  {
    // mongoose schema offers timestamps to track when user create and update their data.
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;

// Mongoose support the following data types:
// String, Number, Boolean, Date, Array, Object, Buffer, Mixed, ObjectId, Decimal128, Map

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   isAdmin: Boolean,
//   createdAt: Date,
//   hobbies: [String], // Array of strings
//   profile: { type: Object }, // Generic object
//   image: Buffer, // Binary data
// });
