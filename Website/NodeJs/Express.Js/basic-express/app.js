const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./index.html"));
// });

app.all("*", (req, res) => {
  res.status(404).send("404!!!");
});

app.listen(5000, () => console.log("run on port 5000"));
