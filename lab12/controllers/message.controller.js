const Message = require("../models/message.model");

exports.sendMessage = (req, res) => {
  const data = req.body;
  res.render("message_send", { message: data });
};

exports.getMessage = (req, res) => {
  let cookies = req.get("Cookie");
  res.render("message_list", {
    messages: Message.getAll(),
    last_author: cookies.split("=")[1].split(";")[0],
  });
};

exports.postMessage = (req, res) => {
  req.session.last_author = req.body.author;
  const newMessage = new Message(req.body);
  newMessage.save();
  const author = Message.getAll().at(-1).author;
  res.setHeader("Set-Cookie", `last_author=${author}; HttpOnly`);
  res.redirect("/message/see");
};
