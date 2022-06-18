const Router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { users } = require("../db");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
Router.post(
  "/signup",
  [check("email").isEmail(), check("password").isLength({ min: 6 })],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    let user = users.find((user) => user.email === email);
    if (user) {
      return res.status(400).json({
        msg: "user already",
      });
    }
    let hashPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashPassword });
    let token = await JWT.sign({ email }, "asdfasdfasdfasdfadf", {
      expiresIn: 3600000,
    });
    return res.status(200).json({ token });
  }
);

Router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({
      msg: "no user",
    });
  }
  let match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({
      msg: "password wrong",
    });
  }
  let token = await JWT.sign({ email }, "asdfasdfasdfasdfadf", {
    expiresIn: 3600000,
  });
  return res.status(200).json({ token });
});

module.exports = Router;
