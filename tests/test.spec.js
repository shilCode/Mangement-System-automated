// @ts-check
const { test, expect, chromium } = require('@playwright/test');
const {POmanger} = require('../pageobject/POmanager')
let page;


test.beforeAll( async ({browser})=>{
   page = await browser.newPage();
   const poManger = new POmanger(page);
   const loginPage = poManger.getLoginPage()


   await loginPage.goTo()
})


test.describe('LOGIN',async ()=>{
  test('invalid login', async () => {
    
    const poManger = new POmanger(page);
    const loginPage = poManger.getLoginPage()
  
    //invalid login
    await loginPage.userName.type('Admin')
    await loginPage.password.type('admin12344') //passcode is wrong
    await loginPage.submit.click()
  
    await expect(loginPage.alertInvalidCred).toHaveText('Invalid credentials')
  });
  
  test('login - required field ', async () => {

    const poManger = new POmanger(page);
    const loginPage = poManger.getLoginPage()
    
    //required field needs to be filled text is present and visible
    await loginPage.submit.click()
    await expect(loginPage.requiredField.nth(0)).toContainText('Required')
    await expect(loginPage.requiredField.nth(1)).toContainText('Required')
    await expect(loginPage.requiredField.nth(0)).toBeVisible()
    await expect(loginPage.requiredField.nth(1)).toBeVisible()
  
  });
  
  
  test('valid login', async () => {
    const poManger = new POmanger(page);
    const loginPage = poManger.getLoginPage()

    await loginPage.userName.type('Admin')
    await loginPage.password.type('admin123')
    await loginPage.submit.click()
    await expect(loginPage.profilePicDashboard.nth(0)).toBeInViewport()
  
  });


  test('forget password',async ()=>{

    const poManger = new POmanger(page);
    const loginPage = poManger.getLoginPage()

    await loginPage.forgetPassword.click()
    await loginPage.userName.type('abc')
    await loginPage.submit.click()
    await expect(await loginPage.forgetPasswordTitle).toHaveText("Reset Password link sent successfully")
  
  })
} )



test.describe('Sidebar',async()=>{
  test('Dashboard needs to be landing page after login',async()=>{

    const poManger = new POmanger(page);
    const loginPage = poManger.getLoginPage()
    const sideBar = poManger.getSideBar()

    await loginPage.validLogin()

    
    //making sure after login Dashboard is present after login
    await expect(sideBar.dashboardHeader).toContainText('Dashboard')

  })
  test('Verify that sidebar can be hidden',async()=>{

    
    const poManger = new POmanger(page);
    const loginPage = poManger.getLoginPage()
    const sideBar = poManger.getSideBar()

    await loginPage.validLogin()

    await sideBar.mainMenuButton.click()
    await expect(sideBar.mainMenuButton).toBeEditable()


  })

  
})




