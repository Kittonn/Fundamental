const jwt = require("jsonwebtoken")
const verify_token = (req,res,next) =>{
  const auth_headers = req.headers["authorization"];
  const token = auth_headers && auth_headers.split(" ")[1];
  if (token === null) return res.status(403).send('nulll')
  jwt.verify(token,"secret_key",(err,user)=>{
    if (err) return res.status(404).send("error")
    req.user = user;
    next()
  })
}

module.exports = verify_token