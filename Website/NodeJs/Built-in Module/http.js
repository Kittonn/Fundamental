const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home");
  }
  if (req.url === "/help") {
    res.end("Help home");
  }
});

server.listen(5000);
