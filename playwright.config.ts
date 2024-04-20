// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  // eslint-disable-next-line
  reporter: process.env.CI ? 'dot' : 'list',
  retries:0,
  // eslint-disable-next-line
  workers: process.env.CI ? undefined : undefined,
  
  use: {
    trace: 'on-first-retry',
    headless:true,
    baseURL:'https://opensource-demo.orangehrmlive.com/'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    },

  ],

});

