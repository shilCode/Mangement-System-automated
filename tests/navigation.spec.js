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
       await loginPage.validLogin()
       
    })
  
    test("Assert About, support, change password and logout is visible and contain proper text",async ()=>{
  
        test.slow()

      const navBar = poManger.getNavBar()

      await page.waitForURL('**/dashboard/index');

        await navBar.userArea.waitFor()
      await expect(navBar.userArea).toBeVisible()
      
      await navBar.userAreaDropdown.click()
      await expect(navBar.userAreaAbout).toBeVisible()
      await expect(navBar.userAreaAbout).toContainText('About')
      await expect(navBar.userAreaSupport).toBeVisible()
      await expect(navBar.userAreaSupport).toContainText('Support')
      await expect(navBar.userChangePass).toBeVisible()
      await expect(navBar.userChangePass).toContainText('Change Password')
      await expect(navBar.userAreaLogout).toBeVisible()
      await expect(navBar.userAreaLogout).toContainText('Logout')
    })

    test("Profile is visible",async ()=>{

        const navBar = poManger.getNavBar()
        await page.waitForURL('**/dashboard/index');
        await expect(navBar.userArea).toBeVisible()
        await expect(navBar.userArea).toBeEditable()
      })
    
  
  
    test("Verify About is funtional",async ()=>{
      const navBar = poManger.getNavBar()

      await page.waitForURL('**/dashboard/index');
      await navBar.userArea.click()
      await navBar.userAreaAbout.click()
      await expect(navBar.userAreaAboutHeading).toContainText('About')
      await expect(navBar.userAreaDialogClose).toBeEditable()
      await navBar.userAreaDialogClose.click()
    })
  
    test("Verify Support is functional",async ()=>{
  
     test.slow()
      const navBar = poManger.getNavBar()
      await navBar.userArea.click()
      await navBar.userAreaSupport.click()
      await expect(page).toHaveURL(/.*support/);
      await expect(navBar.userAreaSupportLink).toContainText(' ossupport@orangehrm.com ')
      await expect(navBar.userAreaSupportLink).toBeEditable()
      await expect(navBar.userAreadHelpIcon).toBeEditable()

      const pagePromise = context.waitForEvent('page');
      await navBar.userAreadHelpIcon.click()
      //navigation to newPage
      const newPage = await pagePromise;
        await newPage.waitForLoadState();

        const HelpGuide = newPage.url()

        expect(HelpGuide).toMatch('https://starterhelp.orangehrm.com/hc/en-us')

        console.log(newPage.url())
      
        

    })
  
    // test("Verify Change Password is functional",async ()=>{
  
    //   const loginPage = poManger.getLoginPage()
    //   const navBar = poManger.getNavBar()
  
    //   await loginPage.validLogin()
  
    // //
  
    // })
  
    // test("Verify Logout is functional",async ()=>{
  
    //   const loginPage = poManger.getLoginPage()
    //   const navBar = poManger.getNavBar()
  
    //   await loginPage.validLogin()
  
    // //
  
    // })
  