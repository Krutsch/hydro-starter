import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("returns 'Learn hydro-js'", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("a")).toContainText("Learn hydro-js.");
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
