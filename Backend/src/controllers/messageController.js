const { Conversation } = require("../models/conversationModel");
const { Message } = require("../models/messageModel");

// Controller function to send a message
exports.sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { recieverId } = req.params;
    const senderId = req.user._id;

    console.log(message, recieverId, senderId); // Log message details for debugging

    // Find an existing conversation between sender and receiver
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] }, // Check if both users are in the conversation
    });

    // If no conversation exists, create a new one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId], // Store sender and receiver as participants
      });
    }

    // Create a new message document
    const newMessage = new Message({
      senderId,     // Store sender's ID
      recieverId,   // Store receiver's ID
      message,      // Store message content
    });

    // Add the new message's ID to the conversation's messages array
    conversation.messages.push(newMessage._id);

    // Save both the new message and the updated conversation using Promise.all for efficiency
    await Promise.all([newMessage.save(), conversation.save()]);

    // Send a success response back to the client
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
      newMessage, // Include the new message in the response
    });

  } catch (err) {
    console.log("send message error: ", err.message); // Log the error message for debugging

    // Send a server error response if something goes wrong
    res.status(500).json({ success: false, message: err.message });
  }
};