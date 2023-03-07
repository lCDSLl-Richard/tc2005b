exports.getDefault = (req, res) => {
  res.redirect("home");
};

exports.getHome = (req, res) => {
  res.render("home", {
    name: req.session.last_author || "World",
    fruits: ["Manzana", "Mango", "Fresa", "Melon", "Sandia"],
  });
};
