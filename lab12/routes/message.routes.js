const express = require("express");

const router = express.Router();

const messageController = require("../controllers/message.controller");

router.get("/send", messageController.sendMessage);

router.get("/see", messageController.getMessage);

router.post("/send", messageController.postMessage);

router.get("/delete/:id", messageController.getDelete);

module.exports = router;
