const postRoutes = require("./posts");
const animalRoutes = require("./animals");

const constructorMethod = app => {
  app.use("/animals", animalRoutes);
  app.use("/posts", postRoutes);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;