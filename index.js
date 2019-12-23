const puppeteer = require('puppeteer');
const cheerio = require('cheerio');


(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://10fastfingers.com/typing-test/english');
    // var wait = ms => new Promise((r, j)=>setTimeout(r, ms))
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    let $ = cheerio.load(bodyHTML)
    let text = $(".highlight").text()
    await page.focus("#inputfield")
    page.keyboard.type($("#row1").text())
})();