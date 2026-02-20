import { test, expect } from '@playwright/test';

test('Verify New Homepage & Premium Features', async ({ page }) => {
    // Set viewport to ensure consistent layout
    await page.setViewportSize({ width: 1280, height: 800 });

    // 1. Visit Homepage
    console.log('Navigating to homepage...');
    await page.goto('/');
    await page.screenshot({ path: 'debug_homepage.png' });

    // 2. Verify Hero Section (New Design)
    console.log('Checking Hero Section...');
    await expect(page.getByText(/Artistic/i)).toBeVisible();
    await expect(page.getByText(/expression/i)).toBeVisible();

    // Explore now is a primary call to action link
    console.log('Checking Explore Link visibility...');
    const exploreLink = page.getByRole('link', { name: /Explore now/i }).first();

    // Scroll to element to ensure it's in view
    await exploreLink.scrollIntoViewIfNeeded();
    await expect(exploreLink).toBeVisible({ timeout: 10000 });

    // 3. Verify Hotspots (Interactive Feature)
    console.log('Checking Hotspots...');
    // The hotspot point typically has a specific class or we use the 'View' buttons
    const hotspotButton = page.getByRole('button', { name: /View/i }).first();

    // Scroll to section to ensure hotspot is in view
    await hotspotButton.scrollIntoViewIfNeeded();
    await expect(hotspotButton).toBeVisible();

    console.log('Clicking Hotspot...');
    await hotspotButton.click({ force: true });

    // Give it a moment to animate the glass card
    await page.waitForTimeout(1000);
    await expect(page.getByText(/Shop Now/i).first()).toBeVisible();
});

test('Verify Product Page Premium Features', async ({ page }) => {
    // 1. Navigate to a real product page
    await page.goto('/product/tsg-acc-001');

    // 2. Verify Scarcity Indicator (Stock Pulse)
    await expect(page.getByText(/Low Stock/i)).toBeVisible();

    // 3. Verify Recommendations (Complete the Look)
    await expect(page.getByText(/Complete the Look/i)).toBeVisible();

    // 4. Test Variant Selection (Reactive Stock Pulse)
    const variantBlack = page.getByRole('button', { name: /Void Black/i }).first();
    if (await variantBlack.isVisible()) {
        await variantBlack.click();
        // Void Black has stock 12, so the "Low Stock" should disappear
        await expect(page.getByText(/Low Stock/i)).not.toBeVisible();
    }
});
