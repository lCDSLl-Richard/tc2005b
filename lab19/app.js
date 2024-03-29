const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const csrf = require("csurf");
const isAuth = require("./util/is-auth");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(
  session({
    secret:
      "mi string secreto que debe ser un string aleatorio muy largo, no como éste",
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

const csrfProtection = csrf();
app.use(csrfProtection);

app.use("/home", (request, response, next) => {
  response.send("Bienvenido a casa!");
});

const rutasUsers = require("./routes/users.routes");

app.use("/users", rutasUsers);

const hotcakesRutas = require("./routes/hot_cakes.routes");

app.use("/hot_cakes", isAuth, hotcakesRutas);

app.use((request, response, next) => {
  console.log("Otro middleware!");

  response.status(404);

  //Manda la respuesta
  response.send("Lo sentimos, ya no tenemos hot cakes");
});

app.listen(3000);
