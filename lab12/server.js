const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "static")));

app.set("view engine", "ejs");
app.set("views", "views");

const serverController = require("./controllers/server.controller");

app.get("/", serverController.getDefault);

app.get("/home", serverController.getHome);

const messageRoutes = require("./routes/message.routes");
app.use("/message", messageRoutes);

const labsRoutes = require("./routes/labs.routes");
app.use("/labs", labsRoutes);

app.listen(3000);
