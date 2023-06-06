class SideBar{
    constructor(page){
        this.page=page;
        this.dashboardHeader=page.locator('[class*=oxd-text--h6]');
        this.mainMenuButton=page.locator('[class*="oxd-main-menu-button"]')

    }
}
module.exports = SideBar;