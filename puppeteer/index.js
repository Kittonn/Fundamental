const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);
  await page.goto(
    "https://th.m.wikipedia.org/wiki/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B3%E0%B8%82%E0%B8%A7%E0%B8%B1%E0%B8%8D%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2"
  );

  let name = [];
  // #content-collapsible-block-0 > dl:nth-child(3) > dt > a
  for (let i = 1; i < 19; i += 2) {
    let element = await page.waitForSelector(
      `#content-collapsible-block-0 > dl:nth-child(${i}) > dt > a`
    );
    let element2 = await page.waitForSelector(
      `#content-collapsible-block-0 > ul:nth-child(${i + 1}) > li`
    );
    let text = await page.evaluate((element) => element.textContent, element);
    let slogan = await page.evaluate(
      (element) => element.textContent,
      element2
    );

    await name.push(text, " ", slogan + "\n");
  }
  // #content-collapsible-block-0 > ul:nth-child(2) > li
  // #content-collapsible-block-0 > ul:nth-child(18) > li

  await fs.writeFile("name.txt", name);

  await browser.close();
};

start();
