const { Given, When, Then, Before, After,setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { POmanger } = require('../../pageobject/POmanager');

setDefaultTimeout(20000) // need to think of way so that this wait is implicit not explicit
let poManger;
let loginPage;
let browser;
let context;
let page;

Before(async ()=>{
  browser = await chromium.launch({
    headless:false
  });
    context = await browser.newContext();
    page = await context.newPage();
    poManger = new POmanger(page);
    loginPage = poManger.getLoginPage();
    

})

Given('the user is on the login page', async function () {
  await loginPage.goTo();

});

When('the user enters invalid credentials', async function () {

    // loginPage = poManger.getLoginPage();
  await loginPage.userName.type('Admin');
  await loginPage.password.type('admin12344'); //passcode is wrong
  await loginPage.submit.click();
});

Then('an alert with {string} is displayed', async function (string) {
    // loginPage = poManger.getLoginPage()
  
    //invalid login
    await loginPage.userName.type('Admin')
    await loginPage.password.type('admin12344') //passcode is wrong
    await loginPage.submit.click()
  
    await expect(loginPage.alertInvalidCred).toHaveText('Invalid credentials')

});


When('the user submits without filling required fields',async function () {
  // loginPage = poManger.getLoginPage()
    
    //required field needs to be filled text is present and visible
    await loginPage.submit.click()
    await expect(loginPage.requiredField.nth(0)).toContainText('Required')
    await expect(loginPage.requiredField.nth(1)).toContainText('Required')
   
});

Then('the required field messages are displayed',async function () {
  await loginPage.submit.click()
  await expect(loginPage.requiredField.nth(0)).toContainText('Required')
  await expect(loginPage.requiredField.nth(1)).toContainText('Required')
  await expect(loginPage.requiredField.nth(0)).toBeVisible()
  await expect(loginPage.requiredField.nth(1)).toBeVisible()
});

When('the user clicks on the {string} link and provides an invalid username',async function (string) {
  // loginPageoginPage = poManger.getLoginPage()

  await loginPage.forgetPassword.click()
  await loginPage.userName.type('abc')
  await loginPage.submit.click()
  await expect(await loginPage.forgetPasswordTitle).toHaveText("Reset Password link sent successfully")
});

Then('a success message is displayed',async function () {
  // loginPage = poManger.getLoginPage()

  await loginPage.userName.waitFor()
  await loginPage.userName.type('Admin')
  await loginPage.password.type('admin123')
  await loginPage.submit.click()
  await expect(loginPage.profilePicDashboard.nth(0)).toBeInViewport()
});

When('the user enters valid credentials',async function () {
  // loginPage = poManger.getLoginPage()

    await loginPage.userName.waitFor()
    await loginPage.userName.type('Admin')
    await loginPage.password.type('admin123')
    await loginPage.submit.click()
});


Then('the user is logged in and sees the profile picture on the dashboard',async function () {


  await loginPage.userName.waitFor()
  await loginPage.userName.type('Admin')
  await loginPage.password.type('admin123')
  await loginPage.submit.click()
  await expect(loginPage.profilePicDashboard.nth(0)).toBeInViewport()
});

After(async ()=>{
  await browser.close();
})



















