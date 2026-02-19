import { test, expect } from '@playwright/test';

test('Stitch Design User Journey: Home -> Product -> Cart -> Checkout -> Thank You', async ({ page }) => {
    page.on('console', msg => console.log(`BROWSER LOC: ${msg.text()}`));
    // 1. Mobile Homepage
    await page.goto('/');
    await expect(page).toHaveTitle(/tsgabrielle/i);

    // Verify Iridescence Hero is present
    await expect(page.getByRole('heading', { name: /iridescence/i })).toBeVisible({ timeout: 30000 });

    // Verify Mobile Categories are present
    // using getByText is fine here as "Explore" is unique enough in context or we just check visibility
    await expect(page.getByText('Explore')).toBeVisible();

    // 2. Navigate to Product Page (using the new generic route)
    await page.goto('/product/tsg-acc-001');

    // Verify Product Page Details
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Holographic Silk Scarf');

    // 3. Add to Cart
    await page.getByRole('button', { name: /add to bag/i }).click();

    // 4. Verify Cart Page (Glass Shopping Bag)
    await expect(page).toHaveURL(/.*cart/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Shopping Bag');
    await expect(page.getByText('Holographic Silk Scarf')).toBeVisible();

    // 5. Checkout (3D Glass)
    await page.getByRole('link', { name: /checkout/i }).click();
    await expect(page).toHaveURL(/.*checkout/);
    // Using heading role to be specific, as "Shipping" might appear in text elsewhere
    await expect(page.getByRole('heading', { name: 'Shipping' })).toBeVisible();

    // Fill Shipping form
    await page.getByPlaceholder('Email').fill('test@example.com');
    await page.getByPlaceholder('First Name').fill('Test');
    await page.getByPlaceholder('Last Name').fill('User');
    await page.getByPlaceholder('Address').fill('123 Fashion St');
    await page.getByPlaceholder('City').fill('Paris');
    await page.getByPlaceholder('Zip Code').fill('75001');

    // Continue to Payment
    await page.getByRole('button', { name: /continue/i }).click();

    // Verify Payment Step
    await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();

    // Verify Pay button is visible (using regex for "Pay $...")
    await expect(page.getByRole('button', { name: /^Pay \$/i })).toBeVisible();

    // Pay
    await page.getByRole('button', { name: /^Pay \$/i }).click();

    // 6. Thank You Page
    // The checkout has a 2000ms delay. We wait for URL change.
    await page.waitForURL(/.*thank-you/, { timeout: 10000 });
    await expect(page.getByText('Order Confirmed!')).toBeVisible();
    // removed confetti check as it's canvas
});
