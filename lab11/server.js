const express = require("express");
const path = require("path");
const labs = require("./routes/labs1-4");
const bodyParser = require("body-parser");
const big_lab = require("./routes/big-lab");
const form = require("./routes/form");

const app = express();

app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Hola mundo desde Express</h1>");
});

app.use("/labs", labs);
app.use("/big-lab", big_lab);
app.use("/form", form);

app.listen(3000);
