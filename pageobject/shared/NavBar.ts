import { Locator, Page } from "playwright";

export class NavBar{
    navBarFullView: Locator;
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
        this.navBarFullView=page.locator('[class="oxd-topbar-header"]')
        this.userArea=this.navBarFullView.locator('[class*="header-userarea"]')
        this.userAreaDropdown=this.navBarFullView.locator('[class="oxd-userdropdown-name"]')
        this.userAreaAbout=this.navBarFullView.locator('//a[contains(text(),"About")]')
        this.userAreaAboutHeading=this.navBarFullView.locator('[class*=orangehrm-main-title]')
        this.userAreaDialogClose=this.navBarFullView.locator('[class*="oxd-dialog-close-button"]')
        this.userAreaSupport=this.navBarFullView.locator('//a[contains(text(),"Support")]')
        this.userAreaSupport=this.navBarFullView.locator('[href="mailto:ossupport@orangehrm.com"]')
        this.userAreadHelpIcon=this.navBarFullView.locator('[title="Help"]')
        this.userChangePass=this.navBarFullView.locator('//a[contains(text(),"Change")]')
        this.userChangePasswordAdmin=this.navBarFullView.locator('[type="password"]')
        this.userChangePasswordAdmin=this.navBarFullView.locator('[type="submit"]')
        this.userChangePasswordSuccess=this.navBarFullView.locator('[class*="oxd-toast-container"]')
        this.userAreaAbout=this.navBarFullView.locator('//a[contains(text(),"Logout")]')
        
    }
}
