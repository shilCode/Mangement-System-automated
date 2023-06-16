// @ts-check
const { test, expect } = require('@playwright/test');
const {POmanger} = require('../pageobject/POmanager')
let page;
let poManger;
let context;


  test.beforeAll( async ({browser})=>{
    context = await browser.newContext()
    page = await context.newPage();
    poManger = new POmanger(page);
     const loginPage = poManger.getLoginPage()
  
     await loginPage.goTo()
     
  })
  
  test('invalid login', async () => {

    const loginPage = poManger.getLoginPage()
  
    //invalid login
    await loginPage.userName.type('Admin')
    await loginPage.password.type('admin12344') //passcode is wrong
    await loginPage.submit.click()
  
    await expect(loginPage.alertInvalidCred).toHaveText('Invalid credentials')
  });
  
  test('login - required field ', async () => {

    const loginPage = poManger.getLoginPage()
    
    //required field needs to be filled text is present and visible
    await loginPage.submit.click()
    await expect(loginPage.requiredField.nth(0)).toContainText('Required')
    await expect(loginPage.requiredField.nth(1)).toContainText('Required')
    await expect(loginPage.requiredField.nth(0)).toBeVisible()
    await expect(loginPage.requiredField.nth(1)).toBeVisible()
  
  });

  test('forget password',async ()=>{

    const loginPage = poManger.getLoginPage()

    await loginPage.forgetPassword.click()
    await loginPage.userName.type('abc')
    await loginPage.submit.click()
    await expect(await loginPage.forgetPasswordTitle).toHaveText("Reset Password link sent successfully")
  
  })
  
  
  test('valid login', async ({browser}) => {

    const loginPage = poManger.getLoginPage()

    await loginPage.userName.waitFor()
    await loginPage.userName.type('Admin')
    await loginPage.password.type('admin123')
    await loginPage.submit.click()
    await expect(loginPage.profilePicDashboard.nth(0)).toBeInViewport()
  
  });








