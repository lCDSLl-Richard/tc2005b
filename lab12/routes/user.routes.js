const express = require("express");

const router = express.Router();

const userController = require("../controllers/users.controller");

router.get("/signup", userController.getSignup);

router.post("/signup", userController.postSignup);

router.get("/signin", userController.getSignin);

router.post("/signin", userController.postSignin);

module.exports = router;
