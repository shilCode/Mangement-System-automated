class NavBar{
    constructor(page){
        this.page=page;
        this.userArea=page.locator('[class*="header-userarea"]')
        this.userAreaDropdown=page.locator('[class="oxd-userdropdown-name"]')
        this.userAreaAbout=page.locator('//a[contains(text(),"About")]')
        this.userAreaAboutHeading=page.locator('[class*=orangehrm-main-title]')
        this.userAreaDialogClose=page.locator('[class*="oxd-dialog-close-button"]')
        this.userAreaSupport=page.locator('//a[contains(text(),"Support")]')
        this.userAreaSupportLink=page.locator('[href="mailto:ossupport@orangehrm.com"]')
        this.userAreadHelpIcon=page.locator('[title="Help"]')
        this.userChangePass=page.locator('//a[contains(text(),"Change")]')
        this.userChangePasswordAdmin=page.locator('[type="password"]')
        this.userChangePasswordSubmit=page.locator('[type="submit"]')
        this.userChangePasswordSuccess=page.locator('[class*="oxd-toast-container"]')
        this.userAreaLogout=page.locator('//a[contains(text(),"Logout")]')
        
    }
}
module.exports=NavBar;