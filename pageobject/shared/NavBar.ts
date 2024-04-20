import { Locator, Page } from "playwright";

class NavBar{
    userArea: Locator;
    userAreaDropdown: Locator;
    userAreaAboutHeading: Locator;
    userAreaAbout: Locator;
    userAreaDialogClose: Locator;
    userAreaSupport: Locator;
    userAreadHelpIcon: Locator;
    userChangePass: Locator;
    userChangePasswordAdmin: Locator;
    userChangePasswordSuccess: Locator;
    constructor(page:Page){
        this.userArea=page.locator('[class*="header-userarea"]')
        this.userAreaDropdown=page.locator('[class="oxd-userdropdown-name"]')
        this.userAreaAbout=page.locator('//a[contains(text(),"About")]')
        this.userAreaAboutHeading=page.locator('[class*=orangehrm-main-title]')
        this.userAreaDialogClose=page.locator('[class*="oxd-dialog-close-button"]')
        this.userAreaSupport=page.locator('//a[contains(text(),"Support")]')
        this.userAreaSupport=page.locator('[href="mailto:ossupport@orangehrm.com"]')
        this.userAreadHelpIcon=page.locator('[title="Help"]')
        this.userChangePass=page.locator('//a[contains(text(),"Change")]')
        this.userChangePasswordAdmin=page.locator('[type="password"]')
        this.userChangePasswordAdmin=page.locator('[type="submit"]')
        this.userChangePasswordSuccess=page.locator('[class*="oxd-toast-container"]')
        this.userAreaAbout=page.locator('//a[contains(text(),"Logout")]')
        
    }
}
