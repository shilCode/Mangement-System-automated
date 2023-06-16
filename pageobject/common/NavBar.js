class NavBar{
    constructor(page){
        this.page=page;
        this.userArea=page.locator('[class*="header-userarea"]')
        this.userAreaDropdown=page.locator('[class="oxd-userdropdown-name"]')
        this.userAreaAbout=page.locator('//a[contains(text(),"About")]')
        this.userAreaAboutHeading=page.locator('[class*=orangehrm-main-title]')
        this.userAreaDialogClose=page.locator('[class*="oxd-dialog-close-button"]')
        this.userAreaSupport=page.locator('//a[contains(text(),"Support")]')
        this.userChangePass=page.locator('//a[contains(text(),"Change")]')
        this.userAreaLogout=page.locator('//a[contains(text(),"Logout")]')
    }
}
module.exports=NavBar;