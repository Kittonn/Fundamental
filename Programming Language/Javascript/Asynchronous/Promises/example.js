let stock = {
  Fruits: ["banana", "grape", "mango", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop closed"));
    }
  });
};

order(2000, () => console.log(`${stock.Fruits[0]}`))
  .then(() => {
    return order(0000, () => console.log("Production started"));
  })
  .then(() => {
    return order(2000, () => console.log("The fruit was chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stock.liquid[0]} and ${stock.liquid[0]}`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("start machine"));
  })
  .then(() => {
    return order(2000, () => console.log(`${stock.holder[0]}`));
  })
  .then(() => {
    return order(3000, () => console.log(`${stock.toppings[0]}`));
  })
  .then(() => {
    return order(2000, () => console.log("serve"));
  })
  .catch(() => {
    console.log("customer leave");
  })
  .finally(() => {
    console.log("finish");
  });
