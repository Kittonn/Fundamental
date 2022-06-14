const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/transactions");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use("/api/v1", router);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to database ⚡`))
  .catch((err) => console.log(err));
app.listen(process.env.PORT, () =>
  console.log(`listen on port:${process.env.PORT} 🚀`)
);
