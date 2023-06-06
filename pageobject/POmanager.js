const LoginPage=require('./LoginPage')
const SideBar =require('./Sidebar')

class POmanger{
    constructor(page){
        this.page=page;
        this.loginpage=new LoginPage(this.page)
        this.sidebar= new SideBar(this.page)


    }

    getLoginPage(){
        return this.loginpage;
    }
    getSideBar(){
        return this.sidebar;
    }
}

module.exports = {POmanger};