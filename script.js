const puppeteer = require("puppeteer");

(async () => {
  // Запустите браузер
  const browser = await puppeteer.launch();

  // Откройте новую страницу
  const page = await browser.newPage();

  // Загрузите ваш Angular-приложение
  // Замените URL на реальный адрес вашего приложения
  await page.goto("http://localhost:4200/pdf", {
    waitUntil: "networkidle0", // Дождитесь, пока сеть станет "спокойной"
  });

  // Установите размер страницы
  await page.setViewport({ width: 1280, height: 720 });

  // Сохраните страницу в PDF
  await page.pdf({
    path: "cv.pdf", // Имя выходного файла
    format: "A4", // Формат страницы
    printBackground: true, // Включить фоновые изображения
  });

  console.log("PDF успешно создан!");

  // Закройте браузер
  await browser.close();
})();
