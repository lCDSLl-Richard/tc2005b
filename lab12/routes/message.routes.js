const express = require("express");

const router = express.Router();

router.use("/send", (req, res) => {
  const data = req.body;
  res.render("message", { message: data });
});

module.exports = router;
