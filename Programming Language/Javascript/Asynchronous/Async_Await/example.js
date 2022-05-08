let stock = {
  Fruits: ["banana", "grape", "mango", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stock.Fruits[0]}`);
    await time(0000);
    console.log("start production");
    await time(2000)
    console.log("cut the fruit");
    await time(1000)
    console.log(`${stock.liquid[0]} ${stock.liquid[1]}`);
    await time(1000)
    console.log("machine start");
    await time(2000);
    console.log(`${stock.holder[0]}`);
    await time(3000);
    console.log(`${stock.toppings[0]}`);
    await time(1000);
    console.log("serve");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("finish");
  }
}

kitchen();
