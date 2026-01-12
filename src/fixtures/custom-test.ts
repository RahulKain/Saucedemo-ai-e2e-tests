import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
// Import other pages/components as needed

// 1. Declare the types of your fixtures
type MyFixtures = {
  loginPage: LoginPage;
  // Add more pages here
};

// 2. Extend the base test
export const test = base.extend<MyFixtures>({
  // Define how 'loginPage' is initialized
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  // Define how other pages are initialized
  // dashboardPage: async ({ page }, use) => {
  //   const dashboardPage = new DashboardPage(page);
  //   await use(dashboardPage);
  // },
});

export { expect } from '@playwright/test';