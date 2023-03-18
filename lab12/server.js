const express = require("express");
const path = require("path");
const cookieP = require("cookie-parser");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieP());

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "static")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(
  session({
    secret:
      "mi string secreto que debe ser un string aleatorio muy largo, no como éste",
    resave: false,
    saveUninitialized: false,
  })
);

const serverController = require("./controllers/server.controller");

app.get("/", serverController.getDefault);

app.get("/home", serverController.getHome);

const messageRoutes = require("./routes/message.routes");
app.use("/message", messageRoutes);

const labsRoutes = require("./routes/labs.routes");
app.use("/labs", labsRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

app.listen(3000);
