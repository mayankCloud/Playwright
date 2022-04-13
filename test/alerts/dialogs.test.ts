import { Browser, BrowserContext, Page, chromium } from "playwright";

describe("Handle alerts", () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch({
      headless: false,
    });
    context = await browser.newContext();
    page = await context.newPage();
  });

  test("Handle dialogs", async () => {
    await page.goto("https://letcode.in/alert");
    const element = await page.$("#prompt");
    page.on("dialog", async (dialog) => {
      console.log("Message : " + dialog.message());
      console.log("Type : " + dialog.type());
      console.log("Default Value : " + dialog.defaultValue());
      console.log("Accept : " + dialog.accept());
    });

    await element?.click();
  });

  afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
  });
});
