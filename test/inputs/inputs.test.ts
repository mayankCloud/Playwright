import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("Handle input fields", () => {
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
  test("Enter your full name", async () => {
    await page.goto("https://letcode.in/edit");
    await page.type("id=fullName", "Mayank");
  });
  test("Append text at the end", async () => {
    const join = await page.$("//input[@id='join']");
    await join?.focus();
    await page.keyboard.press("End");
    await join?.type(" Human");
  });
  test("Get attribute", async () => {
    const text = await page.getAttribute("id=getMe", "value");
    console.log(text);
  });
  test("Clear text", async () => {
    const clear = await page.$("#clearMe");
    await clear?.focus();
    await clear?.fill("");
  });

  afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
  });
});
