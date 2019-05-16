const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userData = require("../data/users.js");

async function checkCorrect(username, password) {
  let correct = false;
  const userObject = await userData.getUser(username);

  correct = await bcrypt.compare(password, userObject["hashedPassword"]);

  return correct;
}

async function logMiddleware(req) {
    console.log(new Date().toUTCString() + ": " + req.method + " " + req.originalUrl + " " + (req.session.valid ? "(Authenticated User)" : "(Non-Authenticated User)"));
}

router.get("/", async (req, res) => {
  logMiddleware(req);
  if (req.session.valid) res.redirect("/private");
  else res.redirect("/login");
});

router.get("/private", async (req, res) => {
  let authVal = false;
  logMiddleware(req)
  if (req.session.valid) {
    let msg = "Authenticated user";
    authVal = true;
    const userObject = await userData.getUser(req.session.username);
    return res.render("users/private", { authVal: authVal, msg: msg, userObject: userObject });
  } else {
    let msg = "Not an authenticated user";
    return res.render("users/private", { authVal: authVal, msg: msg, });
  }
});

router.post("/login", async (req, res) => {
  const post = req.body;
  logMiddleware(req);
  const userName = post.username;
  const password = post.password;
  let isCorrect;
  try {
    isCorrect = await checkCorrect(userName, password);
  } catch (e) {
    return res.render("users/login", { error: e });
  }
  if (isCorrect) {
    req.session.valid = true;
    req.session.username = userName;
    res.redirect("/private");
  } else {
    res.send("Incorrect credentials");
    res.status(401);
  }
});

router.get("/login", async (req, res) => {
  logMiddleware(req);
  return res.render("users/login");
});

router.get("/logout", async (req, res) => {
  logMiddleware(req);
  req.session.destroy(function(err) {
    // cannot access session here
  });
  res.render("users/logout");
});

module.exports = router;
