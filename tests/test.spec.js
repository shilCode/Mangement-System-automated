// @ts-check
const { test, expect, chromium } = require('@playwright/test');
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


  test('forget password',async ()=>{

    await page.locator('[class*="orangehrm-login-forgot-header"]').click()
    await page.locator('[name="username"]').type('abc')
    await page.locator('[type="submit"]').click()
    await expect(await page.locator('[class*="orangehrm-forgot-password-title"]')).toHaveText("Reset Password link sent successfully")
  
  })
} )



test.describe.only('Sidebar',async()=>{
  test('Dashboard needs to be landing page after login',async()=>{

    //valid loging - need to delete this while changing things to POM

    await page.locator('[placeholder="Username"]').type('Admin')
    await page.locator('[name="password"]').type('admin123')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[alt="profile picture"]').nth(0)).toBeInViewport()

    
    //making sure after login Dashboard is present after login
    await expect(page.locator('[class*=oxd-text--h6]')).toContainText('Dashboard')

  })
  test('Verify that sidebar can be hidden',async()=>{

    
    await page.locator('[placeholder="Username"]').type('Admin')
    await page.locator('[name="password"]').type('admin123')
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[alt="profile picture"]').nth(0)).toBeInViewport()

    await page.locator('[class*="oxd-main-menu-button"]').click()


  })

  
})




