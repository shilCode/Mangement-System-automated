const { Given, When, Then, Before, After,setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { POmanger } = require('../../pageobject/POmanager');
let poManger;
let loginPage;
let navBar;
let newPage;


Before(async ()=>{
    browser = await chromium.launch({
      headless:true
    });
      context = await browser.newContext();
      page = await context.newPage();
      poManger = new POmanger(page);
      loginPage = poManger.getLoginPage()    
  
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


  Then('the user area contains a profile link',async function () {
    await page.waitForURL('**/dashboard/index'); 
    
  });

  When('the user clicks on the profile link',async function () {
    await expect(navBar.userArea).toBeVisible()
  });


  Then('the user can view their profile',async function () {
    await expect(navBar.userArea).toBeEditable()
  });

  Then('the user area contains "About"',async function () {
    await page.waitForURL('**/dashboard/index');
    
  });

  When('the user clicks on "About"',async function () {

    await navBar.userArea.click()
    await navBar.userAreaAbout.click()
  });

  Then('the user can view information in the "About" dialog',async function () {
    await expect(navBar.userAreaAboutHeading).toContainText('About')
    await expect(navBar.userAreaDialogClose).toBeEditable()
  });



  Then('the user can close the "About" dialog',async function () {
    await navBar.userAreaDialogClose.click()
  });



  
    Then('the user area contains "Support"',async function () {
        
        await navBar.userArea.click()
        await navBar.userAreaSupport.click()
        
        
    });
  

  
    When('the user clicks on "Support"',async function () {
        await expect(page).toHaveURL(/.*support/);
        await expect(navBar.userAreaSupportLink).toContainText(' ossupport@orangehrm.com ')
        await expect(navBar.userAreaSupportLink).toBeEditable()
        await expect(navBar.userAreadHelpIcon).toBeEditable()
  
       
    });
  

  
    Then('the user is taken to the support page & the user sees support contact information',async function () {
        const pagePromise = context.waitForEvent('page');
        await navBar.userAreadHelpIcon.click()
        //navigation to newPage
         newPage = await pagePromise;
          await newPage.waitForLoadState();
          const HelpGuide = newPage.url()
  
        expect(HelpGuide).toMatch('https://starterhelp.orangehrm.com/hc/en-us')

  
         
    });
  

  

  
    Then('the user can access help documentation', function () {
        console.log(newPage.url())
    });


  After(async ()=>{
    await browser.close();
  })