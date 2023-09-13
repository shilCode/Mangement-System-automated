const {test} = require('@playwright/test')


test.describe('e2e flow',()=>{

    test.beforeEach(async ()=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/");
    })
})
