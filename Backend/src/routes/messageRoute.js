const express = require("express")
const isAuthorized = require("../middlewares/isAuthorized")
const { sendMessage } = require("../controllers/messageController")
const router = express.Router()

router.post("/send/:recieverId", isAuthorized, sendMessage)


module.exports = {messageRoutes: router}