const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");

// middleware
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound);

// app.get('/api/v1/tasks') --> get all tasks
// app.post('api/v1/tasks') ---> post new tasks
// app.get('api/v1/tasks/:id') --> get single task
// app.delete('api/v1/tasks/:id') --> delete task
// app.patch('api/v1/tasks/:id') --> update task
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server in run on port:${port}...`));
  } catch (error) {
    console.log(error);
  }
};
// 1.22.46

start();
