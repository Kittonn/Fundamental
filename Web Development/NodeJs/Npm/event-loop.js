const { readFile } = require("fs");
console.log("start first task");

readFile("../Built-in Module/text/text.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("finish first task");
});

console.log("start next task");
