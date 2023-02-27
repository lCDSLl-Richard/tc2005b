const express = require("express");
const homeRoutes = require("./routes/home_routes");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hola mundo desde Express</h1>");
});

app.use("/home", homeRoutes);

app.listen(3000);
