const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/lab-6", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/lab6.html"));
});
router.get("/questions", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/questions.html"));
});
router.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/shop.html"));
});

module.exports = router;
