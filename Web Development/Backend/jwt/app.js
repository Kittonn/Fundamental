const express = require("express")
const auth = require('./routes/auth')
const app = express()
const post = require("./routes/post")
app.use(express.json())

app.use("/auth",auth)
app.use("/posts",post)
app.get("/",(req,res)=>{
  res.send("Hello")
})



app.listen(5000,()=>console.log("listen on port:5000 🚀"))