const express = require("express");
const router = express.Router();
const { publicPosts, privatePosts } = require("../db");
const checkAuth = require("../middlewares/checkAuth");
router.get("/public", (req, res) => {
  res.json(publicPosts);
});

router.get("/private", checkAuth, (req, res) => {
  res.json(privatePosts);
});

module.exports = router;
