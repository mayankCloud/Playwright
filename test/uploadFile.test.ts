import { chromium } from "playwright";

describe("Upload file", () => {
  const sampleFile = "../../Playwright/resources/sampleFile.txt";
  const testFile = "../../Playwright/resources/testFile.txt";

  xtest("Upload file using set input files", async () => {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.sendgb.com");
    // await page.click("//span[normalize-space()='OK']");
    await page.setInputFiles("input[name='qqfile']", [sampleFile, testFile]);
  });

  test("Upload using on function(Listener)", async () => {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://the-internet.herokuapp.com/upload");
    //   filechooser event listener
    page.on("filechooser", async (filechooser) => {
      await filechooser.setFiles([sampleFile, testFile]);
    });

    await page.click("//div[@id='drag-drop-upload']", { force: true });
  });
});
