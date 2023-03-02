const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("lab6");
});

router.get("/questions", (req, res) => {
  res.render("questions");
});

router.get("/shop", (req, res) => {
  res.render("shop");
});

module.exports = router;
