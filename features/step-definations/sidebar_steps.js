const { Given, When, Then, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { POmanger } = require('../../pageobject/POmanager');

setDefaultTimeout(40000) // need to think of way so that this wait is implicit not explicit
let poManger;
let loginPage;
let browser;
let context;
let page;
let sideBar;

Before(async () => {
    browser = await chromium.launch({
        headless: true
    });
    context = await browser.newContext();
    page = await context.newPage();
    poManger = new POmanger(page);
    loginPage = poManger.getLoginPage();
    await loginPage.goTo()
    await loginPage.validLogin()

})


Then('the user sees the dashboard header', async () => {
    sideBar = poManger.getSideBar()

    //making sure after login Dashboard is present after login
    await expect(sideBar.dashboardHeader).toContainText('Dashboard')
});


When('the user clicks the main menu button', async () => {
    sideBar = poManger.getSideBar()
    await sideBar.mainMenuButton.click()

});

Then('the main menu button should be editable', async () => {
    await sideBar.mainMenuButton.click()
    await expect(sideBar.mainMenuButton).toBeEditable()

});



Then('the user sees the "Admin" component', async function () {
    await sideBar.adminComponent.click()
    // await expect(sideBar.adminComponent).toContainText('Admin')
    // await expect(sideBar.adminComponent).toBeVisible()
    // await expect(sideBar.adminComponent).toBeEditable()
});



Then('the user sees the "PIM" component', async function () {
    await expect(sideBar.pimComponent).toContainText('PIM')
    await expect(sideBar.pimComponent).toBeVisible()
    await expect(sideBar.pimComponent).toBeEditable()
});



Then('the user sees the "Leave" component', async function () {
    await expect(sideBar.leaveComponent).toContainText('Leave')
    await expect(sideBar.leaveComponent).toBeVisible()
    await expect(sideBar.leaveComponent).toBeEditable()
});



//  Then('the user sees the {string} component',async  function (string) {
//    // Write code here that turns the phrase above into concrete actions
//    return 'pending';
//  });



//  Then('the user sees the {string} component',async  function (string) {
//    // Write code here that turns the phrase above into concrete actions
//    return 'pending';
//  });



//  Then('the user sees the {string} component',async  function (string) {
//    // Write code here that turns the phrase above into concrete actions
//    return 'pending';
//  });



//  Then('the user sees the {string} component',async  function (string) {
//    // Write code here that turns the phrase above into concrete actions
//    return 'pending';
//  });


//  Then('the user sees the {string} header',async  function (string) {
//    // Write code here that turns the phrase above into concrete actions
//    return 'pending';
//  });


//  Then('the user sees the {string} component',async  function (string) {
//    // Write code here that turns the phrase above into concrete actions
//    return 'pending';
//  });



//  Then('the user sees the {string} component',async  function (string) {
//    // Write code here that turns the phrase above into concrete actions
//    return 'pending';
//  });



//  Then('the user sees the {string} component',async  function (string) {
//    // Write code here that turns the phrase above into concrete actions
//    return 'pending';
//  });

After(async () => {
    await browser.close();
})