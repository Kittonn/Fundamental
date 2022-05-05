const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://realpython.com/team/");

  let name = [];
  for (let i = 5; i <= 8; i++) {
    let element = await page.waitForSelector(
      `body > div.container.main-content > div > div > div > div:nth-child(${i}) > p`
    );
    let text = await page.evaluate((element) => element.textContent, element);
    // await name.push(text);
    console.log(text);
  }
  //   await fs.writeFile("name.txt", name.join("\r\n"));

  await browser.close();
};

start();
