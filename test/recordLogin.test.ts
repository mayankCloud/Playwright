import { chromium } from "playwright";

describe("Record Login", () => {
  test("Login and Signout", async () => {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Go to https://letcode.in/
    await page.goto("https://letcode.in/");
    // Click text=Log in
    await page.locator("text=Log in").click();
    // await expect(page).toHaveURL("https://letcode.in/signin");
    // Click text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
    await page
      .locator(
        'text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]'
      )
      .click();
    // Fill text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
    await page
      .locator(
        'text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]'
      )
      .fill("dummy@mail.com");
    // Press Tab
    await page
      .locator(
        'text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]'
      )
      .press("Tab");
    // Fill [placeholder="Enter password"]
    await page.locator('[placeholder="Enter password"]').fill("password");
    // Click button:has-text("LOGIN")
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://letcode.in/' }*/),
      page.locator('button:has-text("LOGIN")').click(),
    ]);
    // Click text=Explore Workspace
    await page.locator("text=Explore Workspace").click();
    // await expect(page).toHaveURL("https://letcode.in/test");
    // Click text=All in One
    await page.locator("text=All in One").click();
    // await expect(page).toHaveURL("https://letcode.in/forms");
    // Click #firstname
    await page.locator("#firstname").click();
    // Fill #firstname
    await page.locator("#firstname").fill("Mayank");
    // Press Tab
    await page.locator("#firstname").press("Tab");
    // Fill #lasttname
    await page.locator("#lasttname").fill("Gupta");
    // Press Tab
    await page.locator("#lasttname").press("Tab");
    // Fill [placeholder="Email input"]
    await page.locator('[placeholder="Email input"]').fill("dummy@mail.com");
    // Click [placeholder="Phone Number"]
    await page.locator('[placeholder="Phone Number"]').click();
    // Fill [placeholder="Phone Number"]
    await page.locator('[placeholder="Phone Number"]').fill("99999999");
    // Click [placeholder="Address Line-1"]
    await page.locator('[placeholder="Address Line-1"]').click();
    // Fill [placeholder="Address Line-1"]
    await page.locator('[placeholder="Address Line-1"]').fill("add1");
    // Click [placeholder="Address Line-2"]
    await page.locator('[placeholder="Address Line-2"]').click();
    // Fill [placeholder="Address Line-2"]
    await page.locator('[placeholder="Address Line-2"]').fill("add2");
    // Click [placeholder="State"]
    await page.locator('[placeholder="State"]').click();
    // Fill [placeholder="State"]
    await page.locator('[placeholder="State"]').fill("tate");
    // Press Home
    await page.locator('[placeholder="State"]').press("Home");
    // Fill [placeholder="State"]
    await page.locator('[placeholder="State"]').fill("state");
    // Press PageDown
    await page.locator('[placeholder="State"]').press("PageDown");
    // Fill input[name="dob"]
    await page.locator('input[name="dob"]').fill("2000-01-01");
    // Check #male
    await page.locator("#male").check();
    // Click text=Sign out
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://letcode.in/' }*/),
      page.locator("text=Sign out").click(),
    ]);
  });
});
