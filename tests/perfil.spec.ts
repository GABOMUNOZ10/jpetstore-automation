import { test, expect } from '@playwright/test';

test('Actualizar información del perfil', async ({ page }) => {

  await page.goto('https://jpetstore.aspectran.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByTitle('My Account').click();
  await page.getByTitle('My Account').click();
  await page.getByTitle('My Account').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('div').filter({ hasText: 'Fish Dogs Reptiles Cats Birds' }).nth(2).click();
  const page1 = await page1Promise;
  await page.getByTitle('My Account').click();
  await page.getByRole('link', { name: 'My Account' }).click();
  await page.locator('input[name="firstName"]').click();
  await page.locator('input[name="firstName"]').fill('Gabriel ');
  await page.locator('input[name="lastName"]').click();
  await page.locator('input[name="lastName"]').fill('Martinez');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').press('ArrowLeft');
  await page.locator('input[name="email"]').press('ArrowLeft');
  await page.locator('input[name="email"]').press('ArrowLeft');
  await page.locator('input[name="email"]').press('ArrowLeft');
  await page.locator('input[name="email"]').press('ArrowLeft');
  await page.locator('input[name="email"]').press('ArrowLeft');
  await page.locator('input[name="email"]').press('ArrowLeft');
  await page.locator('input[name="email"]').press('ArrowLeft');
  await page.locator('input[name="email"]').press('ArrowLeft');
  await page.locator('input[name="email"]').press('ArrowLeft');
  await page.locator('input[name="email"]').fill('Gabo2409@gmail.com');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('3187564025');
  await page.locator('input[name="address1"]').click();
  await page.locator('input[name="address1"]').fill('MEdallo');
  await page.locator('input[name="address2"]').click();
  await page.locator('input[name="address2"]').fill('Antioquia ');
  await page.locator('input[name="city"]').click();
  await page.locator('input[name="city"]').fill('Medellin');
  await page.locator('input[name="state"]').click();
  await page.locator('input[name="state"]').fill('1');
  await page.locator('input[name="zip"]').click();
  await page.locator('input[name="zip"]').fill('123456');
  await page.locator('input[name="country"]').click();
  await page.locator('input[name="country"]').fill('Colombia ');
  await page.getByRole('button', { name: 'Save Account Information' }).click();
  // ✅ Validación final
  await expect(page.locator('body')).toContainText('Your account has been updated.');
});
