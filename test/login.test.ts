import { chromium } from "playwright";

describe("Launch Browser", () => {
  test("Open Google", async () => {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.letcode.in");
    await page.click("text= Log in");
    await page.fill("input[name=email]", "cse.mayankgupta@gmail.com");
    await page.fill("input[name=password]", "Rival.123");
    await page.click('button:text("LOGIN")');
    await page.click('"Sign out"');
    await browser.close();
  });
});
