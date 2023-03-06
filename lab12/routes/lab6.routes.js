const express = require("express");

const router = express.Router();

const lab6Controller = require("../controllers/lab6.controller");

router.get("/", lab6Controller.getDefault);

router.get("/questions", lab6Controller.getQuestions);

router.get("/shop", lab6Controller.getShop);

module.exports = router;
