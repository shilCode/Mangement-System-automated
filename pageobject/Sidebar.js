class SideBar{
    constructor(page){
        this.page=page;
        this.dashboardHeader=page.locator('[class*=oxd-text--h6]');
        this.mainMenuButton=page.locator('[class*="oxd-main-menu-button"]')
        this.adminComponent=page.locator('[href="/web/index.php/admin/viewAdminModule"]')
        this.pimComponent=page.locator('[href="/web/index.php/pim/viewPimModule"]')
        this.leaveComponent=page.locator('[href="/web/index.php/leave/viewLeaveModule"]')
        this.timeComponent=page.locator('[href="/web/index.php/time/viewTimeModule"]')
        this.recruitmentComponent=page.locator('[href="/web/index.php/recruitment/viewRecruitmentModule"]')
        this.myInfoComponent=page.locator('[href="/web/index.php/pim/viewMyDetails"]')
        this.performanceComponent=page.locator('[href="/web/index.php/performance/viewPerformanceModule"]')
        this.directoryComponent=page.locator('[href="/web/index.php/directory/viewDirectory"]')
        this.maintenceComponent= page.locator('[href="/web/index.php/maintenance/viewMaintenanceModule"]')
        this.buzzComponent=page.locator('[href="/web/index.php/buzz/viewBuzz"]')
        this.searchBar=page.locator('[placeholder="Search"]')

    }
}
module.exports = SideBar;