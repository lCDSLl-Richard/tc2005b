const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.getSignup = (req, res) => {
  res.render("register");
};

exports.postSignup = (req, res) => {
  const newUser = new User(req.body);
  newUser.save().then(([rows, fieldData]) => {
    req.session.message = "Usuario Registrado";
    res.redirect("/message/see");
  });
};

exports.getSignin = (req, res) => {
  res.render("signin", { message: req.session.message || "" });
};

exports.postSignin = (req, res) => {
  User.getOne(req.body.username).then(([rows, fieldData]) => {
    const user = rows[0];

    if (!user) {
      req.session.message = "User/Password is incorrect";
      res.redirect("/user/signin");
      return;
    }

    const checkPassword = bcrypt
      .compare(req.body.password, user.password)
      .then((res) => console.log(res));
  });
};
