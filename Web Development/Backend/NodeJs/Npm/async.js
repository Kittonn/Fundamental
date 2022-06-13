// const { readFile, writeFile } = require("fs");
const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

async function show() {
  try {
    // const first = await readFilePromise(
    //   "../Built-in Module/text/text2.txt",
    //   "utf8"
    // );
    const first = await readFile("../Built-in Module/text/text2.txt", "utf8");
    // await writeFilePromise("../Built-in Module/text/text3.txt", "fdsdfsfdf");
    await writeFile("../Built-in Module/text/text3.txt", "fdsdfsfdf");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
}

show();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("../Built-in Module/text/text2.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
