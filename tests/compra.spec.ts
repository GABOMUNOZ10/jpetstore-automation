import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://jpetstore.aspectran.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#SidebarContent').getByRole('link', { name: 'Fish' }).click();
  await page.getByRole('link', { name: 'FI-SW-01' }).click();
  await page.getByRole('link', { name: 'Add to Cart' }).first().click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await page.locator('input[name="billZip"]').click();
  await page.locator('input[name="billZip"]').fill('4');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();

await page.waitForSelector('text=Thank you, your order has been submitted.', { timeout: 7000 });
await expect(page.getByText('Thank you, your order has been submitted.')).toBeVisible();



});