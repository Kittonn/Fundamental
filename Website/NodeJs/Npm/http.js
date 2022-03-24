const http = require("http");

const sever = http.createServer((req, res) => {
  console.log("request");
  res.end("Hello");
});

sever.listen(5000, () => console.log("Hello server"));
