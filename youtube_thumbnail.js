const puppeteer = require('puppeteer');
const { readFileSync } = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  
  // Set the HTML content for the page
  // let htmlContent;
  
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      .thumbnail {
        background: linear-gradient(to bottom right, rgb(102, 195, 226), rgb(74, 212, 155));
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 720px;
        width: 1280px;
        position: relative;
      }
      .thumbnail h1 {
        color: white;
        font-size: 100px;
        text-align: left;
        margin: 0;
        font-family: Arial, sans-serif;
        font-weight: bold;
        z-index: 1;
        text-shadow: 2px 2px 2px rgba(0,0,0,0.3);
        padding-left: 40px;
        padding-right: 0px;
        padding-bottom: 64px;
      }
      .thumbnail h2 {
        color: white;
        font-size: 72px;
        text-align: left;
        margin: 0;
        font-family: Arial, sans-serif;
        font-weight: bold;
        z-index: 1;
        text-shadow: 2px 2px 2px rgba(0,0,0,0.3);
        padding-left: 40px;
      }
      .algebra-svg {
        position: absolute;
        right: 0px;
        bottom: 0px;
        height: 360px;
        opacity: 0.25;
        transform: rotate(330deg);
      }
    </style>
  </head>
  <body class="thumbnail">
    <img class="algebra-svg" src="data:image/jpeg;base64,${
      readFileSync('math-formula-svgrepo-com.png').toString('base64')
    }" alt="Algebra svg">
    <h1>Algebra & Trigonometry</h1>
    <h2>R.2.</h2>
    <h2>Algebra Essentials</h2>
  </body>
  </html>
  
  `;
  await page.setContent(html);
  await page.setViewport({ width: 1280, height: 720 });

  await page.waitForTimeout(2000);

  // Save the screenshot as an image
  await page.screenshot({path: 'thumbnail.png'});

  await browser.close();
})();
