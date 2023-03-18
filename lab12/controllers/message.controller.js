const Message = require("../models/message.model");

exports.sendMessage = (req, res) => {
  res.render("message_send");
};

exports.getMessage = (req, res) => {
  Message.getAll()
    .then(([rows, data]) => {
      res.render("message_list", {
        messages: rows,
        last_author: req.cookies.last_author,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postMessage = (req, res) => {
  req.session.last_author = req.body.author;
  const newMessage = new Message(req.body);
  newMessage.save();
  res.setHeader("Set-Cookie", `last_author=${newMessage.author}; HttpOnly`);
  res.redirect("/message/see");
};

exports.getDelete = (req, res) => {
  const id = req.params.id;
  Message.deleteById(id);
  res.redirect("/message/see");
};
