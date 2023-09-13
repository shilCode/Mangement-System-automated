class LoginPage{
    constructor(page){
        this.page=page;
        this.userName=page.locator('[placeholder="Username"]');
        this.password=page.locator('[name="password"]');
        this.submit=page.locator('[type="submit"]')
        this.alertInvalidCred=page.locator('[role="alert"]')
        this.requiredField=page.locator('[class*="oxd-input-field-error-message"]')
        this.profilePicDashboard=page.locator('[alt="profile picture"]')
        this.forgetPassword=page.locator('[class*="orangehrm-login-forgot-header"]')
        this.forgetPasswordTitle=page.locator('[class*="orangehrm-forgot-password-title"]')

    }

    async goTo(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }

    async validLogin(){


    if(this.userName.isVisible()){
        await this.userName.type('Admin')
        await this.password.type('admin123')
        await this.submit.click()
    }else {
        this.page.reload()
        await this.userName.type('Admin')
        await this.password.type('admin123')
        await this.submit.click()
    }
    }

 
}
module.exports=LoginPage;