const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const start = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);
  await page.goto(
    "https://th.wikipedia.org/wiki/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B3%E0%B8%82%E0%B8%A7%E0%B8%B1%E0%B8%8D%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2"
  );

  // #mw-content-text > div.mw-parser-output > ul:nth-child(8) > li
  const provinces = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(".mw-parser-output dl dt a")
    ).map((x) => x.textContent);
  });
  const slogans = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".mw-parser-output ul li"))
      .map((x) => x.textContent)
      .filter(
        (x, i) =>
          i >= 8 &&
          i < 90 &&
          i !== 20 &&
          i !== 31 &&
          i !== 74 &&
          i !== 77 &&
          i !== 79
      );
  });
  console.log(slogans);
  console.log(slogans.length);

  // let data = Object.assign(...provinces.map((k, i) => ({ [k]: slogans[i] })));
  // Object.assign(...keys.map((k, i) => ({ [k]: values[i] })));

  // await fs.writeFile("slogans.json", JSON.stringify(data));
  // await fs.writeFile("slogans.json", JSON.stringify(slogans));

  await browser.close();
};

start();
