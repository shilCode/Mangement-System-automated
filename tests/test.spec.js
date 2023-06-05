// @ts-check
const { test, expect } = require('@playwright/test');
let page;

test.beforeAll( async ({browser})=>{
   page = await browser.newPage();
   await page.goto('https://opensource-demo.orangehrmlive.com/');
})


test.describe('LOGIN',async ()=>{
  test('invalid login', async () => {
  
    //invalid login
    await page.locator('[placeholder="Username"]').type('Admin')
    await page.locator('[name="password"]').type('admin12344') //passcode is wrong
    await page.locator('[type="submit"]').click()
  
    await expect(page.locator('[role="alert"]')).toHaveText('Invalid credentials')
  });
  
  test('login - required field ', async () => {
    
    //required field needs to be filled text is present and visible
    await page.locator('[class*="orangehrm-login-button"]').click()
    await expect(page.locator('[class*="oxd-input-field-error-message"]').nth(0)).toContainText('Required')
    await expect(page.locator('[class*="oxd-input-field-error-message"]').nth(1)).toContainText('Required')
    await expect(page.locator('[class*="oxd-input-field-error-message"]').nth(0)).toBeVisible()
    await expect(page.locator('[class*="oxd-input-field-error-message"]').nth(1)).toBeVisible()
  
  });
  
  
  test('valid login', async () => {
  
    await page.locator('[placeholder="Username"]').type('Admin')
    await page.locator('[name="password"]').type('admin123')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[alt="profile picture"]').nth(0)).toBeInViewport()
  
  });
} )




