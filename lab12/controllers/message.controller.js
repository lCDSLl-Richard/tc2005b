exports.useMessage = (req, res) => {
  const data = req.body;
  res.render("message", { message: data });
};
