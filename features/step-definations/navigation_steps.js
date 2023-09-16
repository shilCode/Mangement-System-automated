const { Given, When, Then, Before, After,setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { POmanger } = require('../../pageobject/POmanager');
let poManger;
let loginPage;
let navBar;


Before(async ()=>{
    browser = await chromium.launch({
      headless:true
    });
      context = await browser.newContext();
      page = await context.newPage();
      poManger = new POmanger(page);
      loginPage = poManger.getLoginPage();
      
  
  })


When('the user logs in with valid credentials',async function () {
    
    await loginPage.goTo()
    await loginPage.validLogin()
  });

  Then('the user area is visible and editable',async function () {
    navBar = poManger.getNavBar()

      await page.waitForURL('**/dashboard/index');

        await navBar.userArea.waitFor()
      await expect(navBar.userArea).toBeVisible()
  });

  When('the user clicks on the user area',async function () {
    await navBar.userAreaDropdown.click()
  });

  Then('the user sees "About" and can access it',async function () {
    await expect(navBar.userAreaAbout).toBeVisible()
    await expect(navBar.userAreaAbout).toContainText('About')
  });

  Then('the user sees "Support" and can access it',async function () {
    await expect(navBar.userAreaSupport).toBeVisible()
      await expect(navBar.userAreaSupport).toContainText('Support')
  });

  Then('the user sees "Change Password" and can access it',async function () {
    await expect(navBar.userChangePass).toBeVisible()
      await expect(navBar.userChangePass).toContainText('Change Password')
  });

  Then('the user sees "Logout" and can access it',async function () {
    await expect(navBar.userAreaLogout).toBeVisible()
    await expect(navBar.userAreaLogout).toContainText('Logout')
  });


  After(async ()=>{
    await browser.close();
  })