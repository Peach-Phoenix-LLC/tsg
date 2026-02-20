import { test, expect } from '@playwright/test';

test('Verify New Homepage & Premium Features', async ({ page }) => {
    // 1. Visit Homepage
    console.log('Navigating to homepage...');
    await page.goto('http://localhost:3000');
    await page.screenshot({ path: 'debug_homepage.png' });

    // 2. Verify Hero Section (New Design)
    console.log('Checking Hero Section...');
    await expect(page.getByText(/Artistic/i)).toBeVisible();
    await expect(page.getByText(/expression/i)).toBeVisible();

    // Explore now is an <a> tag, so it's a link
    const exploreLink = page.getByText(/Explore now/i);
    console.log('Checking Explore Link visibility...');
    await expect(exploreLink).toBeVisible();

    // 3. Verify Hotspots (Interactive Feature)
    console.log('Checking Hotspots...');
    // The touch target is the div with cursor-pointer next to the hotspot point
    const hotspotTarget = page.locator('.cursor-pointer').first();
    await expect(hotspotTarget).toBeVisible();

    console.log('Clicking Hotspot...');
    await hotspotTarget.click();
    await expect(page.getByText(/Shop now/i)).toBeVisible();
});

test('Verify Product Page Premium Features', async ({ page }) => {
    // 1. Navigate to a product page
    await page.goto('http://localhost:3000/product/1'); // Using mock id 1

    // 2. Verify Scarcity Indicator (Stock Pulse)
    await expect(page.getByText(/Low Stock/i)).toBeVisible();

    // 3. Verify Recommendations (Complete the Look)
    await expect(page.getByText(/Complete the Look/i)).toBeVisible();

    // 4. Test Variant Selection (Reactive Stock Pulse)
    const variantBlack = page.getByRole('button', { name: /Void Black/i });
    if (await variantBlack.isVisible()) {
        await variantBlack.click();
        // Void Black has stock 12, so the "Low Stock" should disappear
        await expect(page.getByText(/Low Stock/i)).not.toBeVisible();
    }
});
