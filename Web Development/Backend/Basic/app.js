const express = require("express");
const router = require("./router/router");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())
app.get("/", (req, res) => {
  res.send(`Hello ${req.url}`);
});
app.use("/api/v1/", router);
app.listen(3000, () => console.log(`listen on port 3000`));
