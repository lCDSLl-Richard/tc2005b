const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "static")));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.redirect("home");
});

app.get("/home", (req, res) => {
  res.render("home", {
    name: "Richard",
    fruits: ["Manzana", "Mango", "Fresa", "Melon", "Sandia"],
  });
});

const messageRoutes = require("./routes/message.routes");
app.use("/message", messageRoutes);

const labsRoutes = require("./routes/labs.routes");
app.use("/labs", labsRoutes);

app.listen(3000);
