const express = require("express");

const router = express.Router();

const labsController = require("../controllers/labs.controller");

router.get("/lab1", labsController.getLab1);

router.get("/lab4", labsController.getLab4);

const lab6Routes = require("./lab6.routes");

router.use("/lab6", lab6Routes);

module.exports = router;
