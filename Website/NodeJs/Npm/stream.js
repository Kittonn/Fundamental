const http = require("http");
const { readFileSync, createReadStream } = require("fs");

http
  .createServer((req, res) => {
    // const text = readFileSync("../Built-in Module/text/text4.txt");
    // res.end(text);

    const fileStream = createReadStream(
      "../Built-in Module/text/text4.txt",
      "utf8"
    );
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", () => {
      res.end(err);
    });
  })
  .listen(5000);
