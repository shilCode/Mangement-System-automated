# Management System - Automation Project for Demo

### Platform used: https://opensource-demo.orangehrmlive.com/


- Automation framework used: Playwright 
- BDD framework used: Cucumber
- Language: JS
- Methods used: DRY, Page Object

To run use code below:

`npm i && npm test && npm run test-pw`



> Issues I will fix
-- need to fix explicit wait

---
## TEST CASES 

> open features folder to read as user what I I have worked on, remember to clone the project. 

**login related test cases - login.spec.js**
- user should be able to login using username and password provided 🟩
- required text is visible when user just clicks on login 🟩
- wrong username and password would results in 'invalid cred' 🟩
- 'Forget your password' functions properly and user gets a mail sent once they provide user name 🟩

**Skip login related test cases -skipLogin.spec.js**
- Skip login with cookies and set storage
    - auth.json is authentication state that can be used for the user

**sidebar related test cases sidebar.spec.js**
- Dashboard needs to be landing page after login 🟩
- Verify that sidebar can be hidden 🟩
- Verify all the component mentioned above are visible in the side-bar🟩
_Elements in the sidebar_
    - search
    - Admin
    - PIM
    - Leave
    - Time
    - Recruitment
    - My Info
    - Performance
    - Dashboard
    - Directory
    - Maintenance
    - Buzz
- Verify that search is fucntional🟩
- Profile is visible🟩


**NavBar related test cases navigation.spec.js**
- Verify About, support, change password and logout is visible and contain proper text🟩
- Verify About is funtional🟩
- Verify Support is functional🟩
- Verify Change Password is functional🟩
- Verify Logout is functional🟩


### API TEST
- TBD

## Transfer the test-cases to Page object model for with DRY method
- POmanger 
    - should contain all the pages so that test.spec can import just once
- Login 🟩
    - should contain login related test cases
- SideBar 🟩
    - should contain sideBar component
- NavBar🟩
    - should contain navigation related component

### Report
- Allure reports



