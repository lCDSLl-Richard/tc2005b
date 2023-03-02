const express = require("express");

const router = express.Router();

router.get("/lab1", (req, res) => {
  res.render("lab1");
});

router.get("/lab4", (req, res) => {
  res.render("lab4");
});

const lab6Routes = require("./lab6.routes");

router.use("/lab6", lab6Routes);

module.exports = router;
