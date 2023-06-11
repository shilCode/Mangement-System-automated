const LoginPage=require('../pageobject/common/LoginPage')
const SideBar =require('../pageobject/common/Sidebar')
const NavBar=require('../pageobject/common/NavBar')

class POmanger{
    constructor(page){
        this.page=page;
        this.loginpage=new LoginPage(this.page)
        this.sidebar= new SideBar(this.page)
        this.navBar=new NavBar(this.page);


    }

    getLoginPage(){
        return this.loginpage;
    }
    getSideBar(){
        return this.sidebar;
    }

    getNavBar(){
        return this.navBar;
    }
}

module.exports = {POmanger};