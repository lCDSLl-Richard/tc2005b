const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/lab-1", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/lab1.html"));
});

router.get("/lab-4", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/lab4.html"));
});

module.exports = router;
