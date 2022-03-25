const express = require("express");
const morgan = require("morgan");
const app = express();
const logger = require("./logger");
const authorize = require("./middleware/authorize");
// req => middleware => res
// app.use([logger, authorize]);
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("items");
});

app.listen(5000, () => console.log("port 5000 jaaaa"));
