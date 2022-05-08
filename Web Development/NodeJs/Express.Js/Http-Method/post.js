const express = require("express");
const app = express();

let { people } = require("./Method-Public/data");

app.use(express.static("./Method-Public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/api/people", (req, res) => {
  res.status(200).json({ status: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Please provide" });
  }
  res.status(201).send({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("please provide");
});

app.listen(5000, () => console.log("port 5000 jaaaa"));
