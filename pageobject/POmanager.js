const LoginPage=require('./LoginPage')
const SideBar =require('./Sidebar')
const NavBar=require('./NavBar')

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