exports.getDefault = (req, res) => {
  res.redirect("home");
};

exports.getHome = (req, res) => {
  res.render("home", {
    name: "Richard",
    fruits: ["Manzana", "Mango", "Fresa", "Melon", "Sandia"],
  });
};
