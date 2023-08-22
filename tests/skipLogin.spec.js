const {test,chromium} = require('@playwright/test')

test('skipping login',async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext({
        storageState:'auth.json'
    })
    const page = await context.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.waitForLoadState('networkidle')
    await page.screenshot({path:"skippedLogin.png"})
})