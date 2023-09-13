// const assert = require('assert');
const { Given, When, Then, setDefaultTimeout, AfterAll } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { POmanger } = require('../../pageobject/POmanager');

setDefaultTimeout(10 * 1000);
let poManger;
let loginPage;


Given('the user is on the login page', async function () {
  const browser = await chromium.launch({ headless: false });
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







