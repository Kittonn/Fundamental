// const names = require("./name");
const { name2 } = require("./name");
const SayHi = require("./module");
const { items, person, age } = require("./module2");

// SayHi(names.name1);
// SayHi(name1);
SayHi(name2);

console.log(items);
console.log(person);
console.log(age);
