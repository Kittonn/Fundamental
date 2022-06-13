const http = require("http");
const { readFileSync } = require("fs");

const error_page = readFileSync("./404.html");
const style_page = readFileSync("./style.css");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(style_page);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(error_page);
    res.end();
  }
});

server.listen(5000);
