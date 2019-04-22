const constructorMethod = app => {
  app.get("/", (req, res) => {
    res.render("prime/static", {});
  });

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
