const http = require("http");

const server = http.createServer();

// const eventEmitter = require("events");

// const custom = new eventEmitter();

// custom.on("res", () => console.log("Hello World"));
// custom.on("res", (fname, lname) => console.log(`${fname} ${lname}`));
// custom.emit("res", "Kittipod", "Lambangchang");
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
