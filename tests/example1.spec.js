
import { test, expect } from '@playwright/test';

test('Open playwright site', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(3500);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Console output
  console.log("Page loaded successfully!");

});

