const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// middleware

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World Isus");
});

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks') --> get all tasks
// app.post('api/v1/tasks') ---> post new tasks
// app.get('api/v1/tasks/:id') --> get single task
// app.delete('api/v1/tasks/:id') --> delete task
// app.patch('api/v1/tasks/:id') --> update task

const port = 3000;
app.listen(port, console.log(`server in run on port:${port}`));
