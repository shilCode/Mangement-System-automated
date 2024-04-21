import  { test,expect } from "@playwright/test";
import {LoginPage} from '../pageobject/shared/LoginPage'
import { SideBar } from "../pageobject/shared/Sidebar";
import { NavBar } from "../pageobject/shared/NavBar";



test('login user, sidebar text assertions and then logout from the navigation menu dropdown',async({page})=>{
    await page.goto('')
    expect(page.url()).toMatch(/auth/)
    const login = new LoginPage(page)
    await login.userName.fill('Admin')
    await login.password.fill('admin123')
    await login.submit.click()
    expect(page.url()).toMatch(/dashboard/)
    const sidebar = new SideBar(page)
    await expect(sidebar.sideBarFullPanel).toBeVisible()    
    //search
    await expect(sidebar.adminComponent).toContainText('Admin')
    await expect(sidebar.pimComponent).toContainText('PIM')
    await expect(sidebar.leaveComponent).toContainText('Leave')
    await expect(sidebar.timeComponent).toContainText('Time')
    await expect(sidebar.recruitmentComponent).toContainText('Recruitment')
    await expect(sidebar.myInfoComponent).toContainText('My Info')
    await expect(sidebar.performanceComponent).toContainText('Performance')
    await expect(sidebar.dashboardComponent).toContainText('Dashboard')
    await expect(sidebar.directoryComponent).toContainText('Directory')
    await expect(sidebar.maintenceComponent).toContainText('Maintenance')
    await expect(sidebar.claimComponent).toContainText('Claim')
    await expect(sidebar.buzzComponent).toContainText('Buzz')
    
    const navBar = new NavBar(page)
    await page.waitForLoadState('networkidle')
    await expect(navBar.navBarFullView).toBeVisible()
    await expect(navBar.userArea).toBeVisible()
    await sidebar.sideBarHideBtn.click()
    await navBar.userArea.click()
    await expect(navBar.userDropdownLogout).toContainText('Logout')
    await navBar.userDropdownLogout.click()
    expect(page.url()).toMatch(/auth/)
})

test.fixme('user can goto leave, select leave type, select dates, add a comment, successful leave & finally cancel the leave',async({page})=>{

 
})