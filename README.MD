### HRM System Automation Test Suite

https://opensource-demo.orangehrmlive.com/

**WORKFLOW**
- Think about the scenario 
- Write it down below
- Code the test-case
- After each section PO the test case


write test cases for all part including login for Demo Mohats skills




## TEST CASES    

**login related test cases**
- user should be able to login using username and password provided 🟩
- required text is visible when user just clicks on login 🟩
- wrong username and password would results in 'invalid cred' 🟩
- 'Forget your password' functions properly and user gets a mail sent once they provide user name 🟩

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
- Verify that search is fucntional
- Profile is visible
- Verify About, support, change password and logout is functional


## Transfer the test-cases to Page object model for with DRY method
- POmanger 
    - should contain all the pages so that test.spec can import just once
- Login 🟩
    - should contain login related test cases
- SideBar 🟩
    - should contain sideBar component
- NavBar
    - should contain navigation related component


