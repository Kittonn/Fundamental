const express = require("express")
const app = express()
const authRouter = require("./routes/auth")
const postRouter = require("./routes/post")
app.use(express.json())
app.use("/auth",authRouter)
app.use("/post",postRouter)
app.get("/",(req,res)=>{
  res.send("Hello")
})

app.listen(3000,()=>console.log("port:3000 🚀"))