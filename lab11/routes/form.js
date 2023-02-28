const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/form.html"));
});

router.post("/request", (req, res) => {
  fs.writeFileSync("./lab11/text.txt", req.body["text"]);
  res.redirect("/form");
});

module.exports = router;
