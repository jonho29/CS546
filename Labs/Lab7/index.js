const express = require("express");
const app = express();
const mainRouter = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
mainRouter(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});