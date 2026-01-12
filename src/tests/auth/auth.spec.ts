import { test, expect } from '../../fixtures/custom-test';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

test.describe('Module 1: Authentication', () => {
    // ⚠️ DISABLE storage state for this suite - testing login/logout functionality
    test.use({ storageState: { cookies: [], origins: [] } });

    test('TC001: Successful Login with Standard User', async ({ loginPage, page }) => {
        // ARRANGE
        await loginPage.navigateToLoginPage();

        // ACT
        await loginPage.login(
            process.env.SAUCE_USERNAME || 'standard_user',
            process.env.SAUCE_PASSWORD || 'secret_sauce'
        );

        // ASSERT
        await expect(page).toHaveURL(/.*inventory\.html/);
        await expect(page.locator('.inventory_list')).toBeVisible();
        await expect(page.locator('.shopping_cart_link')).toBeVisible();
    });
});