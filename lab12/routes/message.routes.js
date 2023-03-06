const express = require("express");

const router = express.Router();

const messageController = require("../controllers/message.controller");

router.use("/send", messageController.useMessage);

module.exports = router;
