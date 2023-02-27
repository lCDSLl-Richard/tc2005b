const express = require("express");

const router = express.Router();

router.get("/logged", (req, res) => {
  res.send("<h1>User Logged!</h1>");
});

module.exports = router;
