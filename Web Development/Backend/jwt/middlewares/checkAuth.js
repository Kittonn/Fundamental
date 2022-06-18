const JWT = require("jsonwebtoken");
const checkAuth = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(400).json({
      errors: [
        {
          msg: "no token",
        },
      ],
    });
  }

  try {
    let user = await JWT.verify(token, "nfb32iur32ibfqfvi3vf932bg932g932");
    // req.user = user.email;
    next();
  } catch (error) {
    return res.status(400).json({
      errors: [
        {
          msg: "token invalid",
        },
      ],
    });
  }
};

module.exports = checkAuth;
