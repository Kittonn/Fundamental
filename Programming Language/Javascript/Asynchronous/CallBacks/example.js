function one(two_call) {
  console.log("one");
  two_call();
}

function two() {
  console.log("two");
}

one(two);
