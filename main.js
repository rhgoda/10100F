const express = require("express");
require('dotenv').config()
const path = require('path');
const puppeteer = require('puppeteer');
const app = express();
const http = require('http');
const https = require('https');



//=================================SERV
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
});

app.get('/', function(req, res) {
  res.set('Cache-Control', 'no-store')
  res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.get('/index.css', function(req, res) {
  res.set('Cache-Control', 'no-store')
  res.sendFile(path.join(__dirname, '/html/index.css'));
});

app.get('/example.png', function(req, res) {
  res.set('Cache-Control', 'no-store')
  res.sendFile(path.join(__dirname, '/example.png'));
});

porthttp = 3000
porthttps = 25565

http.createServer(app).listen(porthttp);
https.createServer({}, app).listen(porthttps);

console.log("Говно запущено на порте " + porthttp + " и " + porthttps);


//==============================BOT
const { Telegraf } = require('telegraf');
bot = new Telegraf(process.env.TOKEN)
bot.launch()


//======================UPDATE
function update() {
  try {
    (async () => {
      const browser = await puppeteer.launch({executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'});
      const page = await browser.newPage();
      await page.goto('https://aliexpress.ru/item/1005002907849570.html?spm=a2g2w.productlist.i3.2.7f6125a4zfKXg2&sku_id=12000022722268689');
      //await page.goto('https://yandex.com');
      await page.screenshot({path: 'example.png', clip: {x:50, y:250, width:700, height:500}});
      await browser.close();
    })();
  } catch (e) {
    console.log("penis");
  }
  
  try {
    bot.telegram.sendMediaGroup('@shteudposting' , [
      {
        media: { source: 'example.png' },
        type: 'photo'
      }
    ]); 
  } catch (e) {
    console.log("benis");
  }
}


update(); // 
setInterval(update, 600000);

