const Message = require("../models/message.model");

exports.sendMessage = (req, res) => {
  const data = req.body;
  res.render("message_send", { message: data });
};

exports.getMessage = (req, res) => {
  res.render("message_list", { messages: Message.getAll() });
};

exports.postMessage = (req, res) => {
  const newMessage = new Message(req.body);
  newMessage.save();
  res.redirect("/message/see");
};
