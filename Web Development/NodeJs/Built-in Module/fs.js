const { readFile, writeFile } = require("fs");

readFile("./text/text.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
