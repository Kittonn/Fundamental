const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("hi");
  res.send("Hello");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("404!!!");
});

app.listen(5000, () => console.log("run on port 5000"));
