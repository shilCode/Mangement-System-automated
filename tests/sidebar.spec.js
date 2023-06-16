// @ts-check
const { test, expect } = require('@playwright/test');
const {POmanger} = require('../pageobject/POmanager')
let page;
let poManger;
let context;


    test.beforeAll( async ({browser})=>{
      context = await browser.newContext()
      page = await browser.newPage();
      poManger = new POmanger(page);
    
       const loginPage = poManger.getLoginPage()
    
       await loginPage.goTo()
       await loginPage.validLogin()
    })
  
    test('Dashboard needs to be landing page after login',async()=>{
      const loginPage = poManger.getLoginPage()
      const sideBar = poManger.getSideBar()
   
      //making sure after login Dashboard is present after login
      await expect(sideBar.dashboardHeader).toContainText('Dashboard')
    
    })
   
    test('Verify that sidebar can be hidden',async()=>{
  
    //   const loginPage = poManger.getLoginPage()
      const sideBar = poManger.getSideBar()
    
      await sideBar.mainMenuButton.click()
  
      await expect(sideBar.mainMenuButton).toBeEditable()
  
  
    })
  
    test('Verify all the side-bar component are visible in the side-bar',async()=>{
  
      const loginPage = poManger.getLoginPage()
      const sideBar = poManger.getSideBar()
   
      await expect(sideBar.mainMenuButton).toBeEditable()
  
      //Admin
      await expect(sideBar.adminComponent).toContainText('Admin')
      await expect(sideBar.adminComponent).toBeVisible()
      await expect(sideBar.adminComponent).toBeEditable()
      //PIM
      await expect(sideBar.pimComponent).toContainText('PIM')
      await expect(sideBar.pimComponent).toBeVisible()
      await expect(sideBar.pimComponent).toBeEditable()
      //Leave
      await expect(sideBar.leaveComponent).toContainText('Leave')
      await expect(sideBar.leaveComponent).toBeVisible()
      await expect(sideBar.leaveComponent).toBeEditable()
      //time
      await expect(sideBar.timeComponent).toContainText('Time')
      await expect(sideBar.timeComponent).toBeVisible()
      await expect(sideBar.timeComponent).toBeEditable()
      //recruitment
      await expect(sideBar.recruitmentComponent).toContainText('Recruitment')
      await expect(sideBar.recruitmentComponent).toBeVisible()
      await expect(sideBar.recruitmentComponent).toBeEditable()
      //my info
      await expect(sideBar.myInfoComponent).toContainText('My Info')
      await expect(sideBar.myInfoComponent).toBeVisible()
      await expect(sideBar.myInfoComponent).toBeEditable()
      //performance
      await expect(sideBar.performanceComponent).toContainText('Performance')
      await expect(sideBar.performanceComponent).toBeVisible()
      await expect(sideBar.performanceComponent).toBeEditable()
      //dashboard
      await expect(sideBar.dashboardHeader).toContainText('Dashboard')
      await expect(sideBar.dashboardHeader).toBeVisible()
      await expect(sideBar.dashboardHeader).toBeEditable()
      //maintenence
      await expect(sideBar.maintenceComponent).toContainText('Maintenance')
      await expect(sideBar.maintenceComponent).toBeVisible()
      await expect(sideBar.maintenceComponent).toBeEditable()
      //directory
      await expect(sideBar.directoryComponent).toContainText('Directory')
      await expect(sideBar.directoryComponent).toBeVisible()
      await expect(sideBar.directoryComponent).toBeEditable()
      //buzz
      await expect(sideBar.buzzComponent).toContainText('Buzz')
      await expect(sideBar.buzzComponent).toBeVisible()
      await expect(sideBar.buzzComponent).toBeEditable()
     
  
  
    })
  
    test('Verify that search is fucntional',async()=>{
  
      const loginPage = poManger.getLoginPage()
      const sideBar = poManger.getSideBar()
  
      //making sure a component is not visible so that search work as it shoud be
      await sideBar.searchBar.type("Admin")
      await expect(sideBar.adminComponent).toBeVisible()
      await expect(sideBar.performanceComponent).toBeHidden()
  
    })
