const express = require("express");
const app = express();
const people = require("./routes/people");
const login = require("./routes/auth");
app.use(express.static("./Method-Public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/people", people);
app.use("/login", login);

app.listen(5000, () => console.log("port 5000 jaaaa"));
