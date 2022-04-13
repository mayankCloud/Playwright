import { Browser, BrowserContext, Page, chromium } from "playwright";

describe("Handle dropdowns", () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch({
      headless: false,
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://letcode.in/dropdowns");
  });

  test("Select a dropdown based on value", async () => {
    const fruits = await page.$("id=fruits");
    await fruits?.selectOption("2");
    const msg = await page.$("p[class='subtitle']");
    if (msg) {
      expect(await msg.textContent()).toContain("Orange");
    }
  });

  test("Select multiple", async () => {
    const heros = await page.$("#superheros");
    await heros?.selectOption([
      { label: "Aquaman" },
      { value: "bt" },
      { index: 8 },
    ]);
  });
  test("Get selected text", async () => {
    await page.selectOption("#country", "India");
    const selectedText = await page.$eval<string, HTMLSelectElement>(
      "#country",
      (ele) => ele.value
    );
    console.log(selectedText);
    expect(selectedText).toBe("India");
  });

  afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
  });
});
