// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  reporter: process.env.CI ? 'dot' : 'list',
  retries:1,
  workers: process.env.CI ? undefined : undefined,
  
  use: {
    trace: 'on-first-retry',
    headless:true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    },

  ],

});

