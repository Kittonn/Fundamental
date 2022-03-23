let stock = {
  Fruits: ["banana", "grape", "mango", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stock.Fruits[Fruit_name]}`);
    call_production();
  }, 2000);
};

// =============  CallBack Hell ===================
let production = () => {
  setTimeout(() => {
    console.log("Production started");
    setTimeout(() => {
      console.log("Fruit has been chopped");
      setTimeout(() => {
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);
        setTimeout(() => {
          console.log("Machine started");
          setTimeout(() => {
            console.log(`${stock.holder[0]}`);
            setTimeout(() => {
              console.log(`${stock.toppings[0]}`);
              setTimeout(() => {
                console.log("serve");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);
