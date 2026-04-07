import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devstage.pharmsmart.co.uk/');
  await page.getByRole('link', { name: 'SIGN IN' }).click();
  await page.getByRole('textbox', { name: 'Enter the branch email address' }).fill('pharmacistore@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('password@1');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('#quick_user_login_cFlnS2pvQTdzRlBIZ1RCczNubzBNdz09').getByRole('img', { name: 'Profile pic' }).click();
  await page.getByRole('textbox').first().fill('1');
  await page.getByRole('textbox').nth(1).fill('2');
  await page.getByRole('textbox').nth(2).fill('3');
  await page.getByRole('textbox').nth(3).fill('4');
});