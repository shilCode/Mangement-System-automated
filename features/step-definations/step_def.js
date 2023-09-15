const { Given, When, Then, setDefaultTimeout, AfterAll } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { POmanger } = require('../../pageobject/POmanager');

setDefaultTimeout(20000);

let poManger;
let loginPage;
let browser;


Given('the user is on the login page', async function () {

  browser = await chromium.launch({
  headless:true
});
  const context = await browser.newContext();
  const page = await context.newPage();
  poManger = new POmanger(page);
  const loginPage = poManger.getLoginPage();
  await loginPage.goTo();

});

When('the user enters invalid credentials', async function () {

    loginPage = poManger.getLoginPage();
  await loginPage.userName.type('Admin');
  await loginPage.password.type('admin12344'); //passcode is wrong
  await loginPage.submit.click();
});

Then('an alert with {string} is displayed', async function (string) {
    loginPage = poManger.getLoginPage()
  
    //invalid login
    await loginPage.userName.type('Admin')
    await loginPage.password.type('admin12344') //passcode is wrong
    await loginPage.submit.click()
  
    await expect(loginPage.alertInvalidCred).toHaveText('Invalid credentials')

});


When('the user submits without filling required fields',async function () {
  loginPage = poManger.getLoginPage()
    
    //required field needs to be filled text is present and visible
    await loginPage.submit.click()
    await expect(loginPage.requiredField.nth(0)).toContainText('Required')
    await expect(loginPage.requiredField.nth(1)).toContainText('Required')
   
});

Then('the required field messages are displayed',{timeout:2000},async function () {
  await loginPage.submit.click()
  await expect(loginPage.requiredField.nth(0)).toContainText('Required')
  await expect(loginPage.requiredField.nth(1)).toContainText('Required')
  await expect(loginPage.requiredField.nth(0)).toBeVisible()
  await expect(loginPage.requiredField.nth(1)).toBeVisible()
});

AfterAll(async () => {
  // Close the browser after all tests have finished
  if (browser) {
    await browser.close();
  }
});









