const express = require("express");
const app = express();

let { people } = require("./data");

app.get("/", (req, res) => {
  res.status(200).json({ status: true, data: people });
});

app.listen(5000, () => console.log("port 5000 jaaaa"));
