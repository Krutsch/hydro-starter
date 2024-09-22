import { defineConfig, devices } from "@playwright/test";

const url = "https://localhost:5000";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: url,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 7"] },
    },
    {
      name: "Mobile Safari",
      use: {
        ...devices["iPhone 15 Pro Max"],
      },
    },
  ],

  webServer: [
    {
      command: "npm start",
      url: url,
      ignoreHTTPSErrors: true,
      reuseExistingServer: true,
    },
  ],
});
