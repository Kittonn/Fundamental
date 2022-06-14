const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const verify_token = require("./middleware/verifyToken")
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/api/signup/", (req, res) => {
  const { id, username, password } = req.body;
  jwt.sign(id, "secret_key", (err, token) => {
    if (err) {
      res.status(404).send({ message: "error" });
    } else {
      res.send({ message: "success", token });
    }
  });
});

app.post("/api/login",verify_token,(req,res)=>{
  res.send("author")
})

// app.put("/api/logout/",authToken,(req,res)=>{
//   const auth_headers = req.headers['authorization']
//   jwt.sign(auth_headers,"",{expiresIn:1},(logout,err)=>{
//     if (logout) {
//       res.send("logoutttt")
//     } else {
//       res.send("error")
//     }
//   })
// })

app.listen(3000, () => console.log("runnnn 🚀"));
