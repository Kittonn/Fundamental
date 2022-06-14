const fs = require("fs");

const saveToDb = (data) => {
    fs.writeFileSync("./data/db.json",JSON.stringify(data), { encoding:"utf-8"})
}

module.exports = saveToDb;