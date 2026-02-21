import { test, expect } from '@playwright/test';

test('Iridescence Product Page loads and shows Add to Bag', async ({ page }) => {
    // Set viewport to ensure we are in desktop mode where the panel logic works reliably
    await page.setViewportSize({ width: 1280, height: 800 });

    // Navigate to a real product page
    await page.goto('/product/8ccaa6e2-017f-4d74-abff-1c8cfd172516');

    // Trigger scroll to make the sticky panel appear
    // We'll scroll incrementally to simulate user behavior which might trigger the event listener better
    await page.evaluate(async () => {
        window.scrollTo(0, 500);
        await new Promise(r => setTimeout(r, 100));
        window.scrollTo(0, 1000);
        await new Promise(r => setTimeout(r, 100));
        window.scrollTo(0, 2000);
    });

    // Wait for "Add to bag" button to become visible.
    // This is the most critical actionable element.
    // We give it a generous timeout because of animations.
    const addToBagBtn = page.getByRole('button', { name: /acquire for collection/i });
    await expect(addToBagBtn).toBeVisible({ timeout: 15000 });

    // Verify Title is present
    await expect(page.getByText(/Structured Wool Trench Coat/i).first()).toBeVisible();

    // Click the button
    await addToBagBtn.click();
});
