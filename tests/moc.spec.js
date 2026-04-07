import { test, expect } from '@playwright/test';

test('Mock Login API', async ({ page }) => {

  // Intercept login API
  await page.route('**/api/login', async route => {

    console.log("Login API intercepted");

    // Send fake response
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        token: "fake-login-token-123"
      })
    });

  });

  // Open login page
  await page.goto('https://reqres.in/');

  // Fill login form
  await page.fill('input[type="email"]', 'eve.holt@reqres.in');
  await page.fill('input[type="password"]', 'wrongpassword');

  // Click login button
  await page.click('button:has-text("Login")');

  // Wait so you can see result
  await page.waitForTimeout(5000);

});