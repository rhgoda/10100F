const express = require("express");
const path = require('path');
const fetch = require('node-fetch');
const puppeteer = require('puppeteer');
const app = express();
const port = 3000;


//=================================SERV
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/example.png', function(req, res) {
  res.sendFile(path.join(__dirname, '/example.png'));
});

app.listen(port);
console.log("Говно запущено на порте " + port)


//==============================BOT
const { Telegraf } = require('telegraf');
bot = new Telegraf(process.env.TOKEN)
const AnalId = [];











//======================UPDATE
function update() {
  (async () => {
    const browser = await puppeteer.launch({executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'});
    const page = await browser.newPage();
    await page.goto('https://aliexpress.ru/item/1005002907849570.html?spm=a2g2w.productlist.i3.2.7f6125a4zfKXg2&sku_id=12000022722268689');
    //await page.goto('https://yandex.com');
    await page.screenshot({path: 'example.png', clip: {x:50, y:230, width:700, height:500}});
    await browser.close();
  })();

  // вот тут постинг
}
ctx.telegram.sendMediaGroup(ctx.chanel_id , [
  {
    type: "photo",
    media:
      "example.png"
  },
]); 

update(); // 
setInterval(update, 600000);

