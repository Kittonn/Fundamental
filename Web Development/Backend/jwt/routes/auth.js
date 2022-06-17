const { check, validationResult } = require("express-validator");
const express = require("express");
const router = express.Router();
const { users } = require("../db");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
router.post(
  "/signup",
  [
    check("email", "Please provide a valid email").isEmail(),
    check(
      "password",
      "Please provide a password that is greater than 6 characters."
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const { password, email } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // validate if user doesn't already
    let user = users.find((user) => user.email === email);

    if (user) {
      res.status(400).json({
        errors: [
          {
            msg: "This user already exists",
          },
        ],
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({
      email,
      password: hashedPassword,
    });
    const token = await JWT.sign(
      {
        email,
      },
      "nfb32iur32ibfqfvi3vf932bg932g932",
      {
        expiresIn: 3600000,
      }
    );
    res.json({ token });
  }
);

router.post("/login", async (req, res) => {
  const { password, email } = req.body;
  let user = users.find((user) => user.email === email);
  if (!user) {
    res.status(400).json({
      errors: [
        {
          msg: "Invalid Credentials",
        },
      ],
    });
  }

  let isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400).json({
      errors: [
        {
          msg: "Invalid Credentials",
        },
      ],
    });
  }
  const token = await JWT.sign(
    {
      email,
    },
    "nfb32iur32ibfqfvi3vf932bg932g932",
    {
      expiresIn: 3600000,
    }
  );
  res.json({ token });
});

router.get("/all", (req, res) => {
  res.status(200).json(users);
});

module.exports = router;
