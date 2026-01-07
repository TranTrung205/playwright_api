// import { test, expect } from '@playwright/test';

// test('Open homepage', async ({ page }) => {
//   await page.goto('https://example.com');
//   await expect(page).toHaveTitle(/Example/);
// });

// Browser / Page context (UI)
import {test, expect} from 'playwright/test';

// test('Open Page', async({page}) => {
//     await page.goto('https://google.com');
//     await expect(page).toBe('');
//     await expect(page).toBeDefined();
//     await expect(page).toBeFalsy();
//     await expect(page).toBeNull()
//     await expect(page).toBeTruthy();
//     await expect(page).toBeUndefined();
//     await expect(page).toHaveScreenshot();
//     await expect(page).toHaveTitle('/Example/');
//     await expect(page).toHaveURL('https://example.com/')
// });

// test('Open page', async({page}) => {
//     await page.goto('https://example.com');
//     const heading = page.locator('h1');
//     await expect(page).toHaveTitle('Google');
//     await expect(page).toHaveURL('https://example.com/');
//     await expect(page.locator('h1')).toHaveText('Google');

//     await expect(page.locator('h1')).toBeAttached();
//     await expect(page.locator('h1')).toBeChecked();
//     await expect(page.locator('h1')).toBeDisabled();
//     await expect(page.locator('h1')).toBeEditable();
//     await expect(page.locator('h1')).toBeEmpty();
//     await expect(page.locator('h1')).toBeEnabled();
//     await expect(page.locator('h1')).toBeFocused();
//     await expect(page.locator('h1')).toBeHidden();
//     await expect(page.locator('h1')).toBeVisible();
//     await expect(page.locator('h1')).toHaveAccessibleDescription('');
//     await expect(page.locator('h1')).toHaveClass(/example/);
//     await expect(page.locator('h1')).toHaveCount(1);
//     await expect(page.locator('h1')).toHaveAttribute('class', 'example');
//     await expect(page.locator('h1')).toHaveCSS('font-size', '16px');
//     await expect(page.locator('h1')).toHaveId('heading1');
//     await expect(page.locator('h1')).toHaveJSProperty('hidden', false);
//     await expect(page.locator('h1')).toHaveText('Example Domain');
//     await expect(page.locator('h1')).toHaveValue('');
// });
// test ( 'Step 03', async({page}) =>{
//     const heading = page.locator('h1');
// await expect(heading).toBeVisible();
// await expect(page.locator('p')).toHaveCount(2);
// await page.click('a');
// await expect(page).toHaveURL('https://example.com/');
// const el = page.locator('h2')
// await expect(el).toHaveText('abc')
// await expect(el).toBeVisible()
// });
test('Step 04', async ({ page }) => {
  await page.goto('https://example.com');
  const link = page.locator('a');
  await expect(link).toBeVisible();
  await link.click();
  await expect(page).toHaveURL(/iana/);
});