const Router = require("express").Router();
const { publicPost, privatePost } = require("../db");
const JWT = require("jsonwebtoken");

Router.get("/public", (req, res) => {
  return res.status(200).json(publicPost);
});

Router.get(
  "/private",
  async (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
      return res.status(400).json({
        msg: "no token",
      });
    }
    try {
      let user = await JWT.verify(token,"asdfasdfasdfasdfadf")
      console.log(user.email);
      req.user = user.email
      console.log(req);
      next()
    } catch (error) {
      return res.status(400).json({
        msg: "error login",
      });
    }
  },
  (req, res) => {
    return res.status(200).json(privatePost);
  }
);

module.exports = Router;
