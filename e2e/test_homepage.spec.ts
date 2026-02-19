import { test, expect } from '@playwright/test';

test('Homepage loads and displays main components', async ({ page }) => {
    // 1. Visit Homepage
    await page.goto('/');

    // 2. Check for key elements
    // We expect the page title to contain the brand name
    await expect(page).toHaveTitle(/tsgabrielle/i);

    // Check for the main brand heading or logo text
    // Using .first() because the brand name might appear in multiple places (navigation, footer, hero)
    // This confirms at least one instance is visible, which is sufficient for a smoke test
    await expect(page.getByText('tsgabrielle').first()).toBeVisible();

    // Check for navigation to ensure the layout is loaded
    await expect(page.getByRole('navigation').first()).toBeVisible();
});
