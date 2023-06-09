// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  reporter: 'list',
  retries:1,
  
  
  use: {
    
    trace: 'on-first-retry',
    headless:false,

  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    },

  ],

});

