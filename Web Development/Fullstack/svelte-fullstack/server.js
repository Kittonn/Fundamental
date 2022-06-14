const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()

app.get("/", (req, res) => {
  res.send("Hello");
});
mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log(`Connected to database ⚡`))
  .catch((err) => console.log(err));
app.listen(process.env.PORT, () => console.log(`listen on port:${process.env.PORT} 🚀`));
