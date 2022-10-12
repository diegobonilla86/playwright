// @ts-check
const { test, expect } = require("@playwright/test");

test("buy a t-shirt", async ({ page }) => {
  await page.goto("http://automationpractice.com/");
  await page.locator("#block_top_menu > ul > li:nth-child(3) > a").click();

  await page
    .locator("#center_column a.button.ajax_add_to_cart_button.btn.btn-default")
    .dispatchEvent("mouseover");

  await page
    .locator("#center_column a.button.ajax_add_to_cart_button.btn.btn-default")
    .click();

  await Promise.race([
    page
      .waitForSelector("[style*='display: block;'] .button-container > a", {
        timeout: 10000,
        state: "visible",
      })
      .catch(),
  ]);

  await page
    .locator('[style*="display: block;"] .button-container > a')
    .click();
  await page.locator(".cart_navigation span").click();
  await page.locator("#email").type("aperdomobo@gmail.com");
  await page.locator("#passwd").type("WorkshopProtractor");
  await page.locator('[id="SubmitLogin"]').click();
  await page.locator(".cart_navigation > .button > span").click();
  await page.locator("#cgv").check();
  await page.locator(".cart_navigation > .button > span").click();
  await page.locator(".bankwire").click();
  await page.locator("#cart_navigation > .button > span").click();
  await expect(page.locator("#center_column > div > p > strong")).toHaveText(
    "Your order on My Store is complete."
  );
});
