// =========================
// PLAYWRIGHT CHEATSHEET 🚀
// =========================

// Import Playwright test module
import { test, expect } from '@playwright/test';

// =========================
// BASIC TEST STRUCTURE
// =========================
test('example test', async ({ page }) => {
  await page.goto('https://example.com'); // Navigate to URL
  await expect(page).toHaveTitle(/Example/); // Assert page title
});

// =========================
// LOCATORS (ELEMENT SELECTORS)
// =========================
test('locators', async ({ page }) => {
  await page.goto('https://example.com');

  page.locator('text=Login'); // Locate by text
  page.locator('#id'); // Locate by id
  page.locator('.class'); // Locate by class
  page.locator('[data-test="value"]'); // Best practice locator
  page.getByRole('button', { name: 'Submit' }); // Accessible role
  page.getByLabel('Email'); // Input label
  page.getByPlaceholder('Enter email'); // Placeholder
});

// =========================
// ACTIONS (USER INTERACTIONS)
// =========================
test('actions', async ({ page }) => {
  await page.goto('https://example.com');

  await page.click('#btn'); // Click element
  await page.fill('#input', 'text'); // Type text (clears first)
  await page.type('#input', 'more text'); // Types without clearing
  await page.press('#input', 'Enter'); // Press keyboard key
  await page.check('#checkbox'); // Check checkbox
  await page.uncheck('#checkbox'); // Uncheck checkbox
  await page.selectOption('#dropdown', 'value'); // Select dropdown
  await page.hover('#menu'); // Hover
  await page.dragAndDrop('#source', '#target'); // Drag and drop
});

// =========================
// ASSERTIONS
// =========================
test('assertions', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle('Example Domain'); // Title check
  await expect(page).toHaveURL(/example/); // URL check
  await expect(page.locator('#msg')).toBeVisible(); // Visible
  await expect(page.locator('#msg')).toBeHidden(); // Hidden
  await expect(page.locator('#input')).toHaveValue('text'); // Value
  await expect(page.locator('#el')).toContainText('Hello'); // Partial text
});

// =========================
// WAITS
// =========================
test('waits', async ({ page }) => {
  await page.goto('https://example.com');

  await page.waitForTimeout(2000); // Hard wait (avoid if possible)
  await page.waitForSelector('#el'); // Wait for element
  await page.waitForURL('**/dashboard'); // Wait for URL change
  await page.waitForLoadState('networkidle'); // Wait for network
});

// =========================
// FRAMES / IFRAME
// =========================
test('frames', async ({ page }) => {
  await page.goto('https://example.com');

  const frame = page.frameLocator('#iframe'); // Switch to iframe
  await frame.locator('button').click(); // Interact inside iframe
});

// =========================
// MULTIPLE TABS / WINDOWS
// =========================
test('multiple tabs', async ({ page, context }) => {
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for new tab
    page.click('#openTab'), // Trigger new tab
  ]);

  await newPage.waitForLoadState();
});

// =========================
// FILE UPLOAD / DOWNLOAD
// =========================
test('file upload', async ({ page }) => {
  await page.goto('https://example.com');

  await page.setInputFiles('#fileInput', 'file.pdf'); // Upload file
});

test('file download', async ({ page }) => {
  await page.goto('https://example.com');

  const [download] = await Promise.all([
    page.waitForEvent('download'), // Wait for download
    page.click('#downloadBtn'), // Trigger download
  ]);

  const path = await download.path(); // Get file path
});

// =========================
// DIALOG HANDLING (ALERT)
// =========================
test('dialog', async ({ page }) => {
  page.on('dialog', async dialog => {
    await dialog.accept(); // Accept alert
    // await dialog.dismiss(); // Cancel alert
  });

  await page.click('#alertBtn');
});

// =========================
// KEYBOARD ACTIONS
// =========================
test('keyboard', async ({ page }) => {
  await page.goto('https://example.com');

  await page.keyboard.press('Enter'); // Press Enter
  await page.keyboard.type('Hello'); // Type text
});

// =========================
// MOUSE ACTIONS
// =========================
test('mouse', async ({ page }) => {
  await page.mouse.click(100, 200); // Click at position
  await page.mouse.move(100, 200); // Move mouse
});

// =========================
// API TESTING
// =========================
test('api test', async ({ request }) => {
  const response = await request.get('https://api.example.com');
  expect(response.status()).toBe(200); // Validate status
});

// =========================
// HOOKS (SETUP / TEARDOWN)
// =========================
test.beforeEach(async ({ page }) => {
  await page.goto('https://example.com'); // Runs before each test
});

test.afterEach(async ({ page }) => {
  // Cleanup after test
});

// =========================
// TEST GROUPING
// =========================
test.describe('Test Suite', () => {
  test('test 1', async ({ page }) => {});
  test('test 2', async ({ page }) => {});
});

// =========================
// TAGGING / SKIP / ONLY
// =========================
test.skip('skip test', async ({ page }) => {}); // Skip test
test.only('run only this', async ({ page }) => {}); // Run only this

// =========================
// SCREENSHOT / VIDEO
// =========================
test('screenshot', async ({ page }) => {
  await page.goto('https://example.com');
  await page.screenshot({ path: 'screenshot.png' }); // Take screenshot
});

// =========================
// ENV VARIABLES
// =========================
const baseURL = process.env.BASE_URL; // Use env variable

// =========================
// CONFIG (playwright.config.ts)
// =========================
// export default {
//   use: {
//     headless: false,
//     screenshot: 'on',
//     video: 'on',
//   },
// };

// =========================
// BEST PRACTICES
// =========================
// - Use data-test attributes for stable locators
// - Avoid hard waits (waitForTimeout)
// - Use auto-waiting (Playwright handles waits)
// - Keep tests independent
// - Use Page Object Model for large projects

// =========================
// END OF CHEATSHEET 🎯
// =========================