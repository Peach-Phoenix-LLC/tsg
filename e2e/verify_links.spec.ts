import { test, expect } from '@playwright/test';

test('Verify all links on homepage are functional', async ({ page, request }) => {
    // 1. Visit Homepage
    console.log('Navigating to homepage...');
    await page.goto('/');

    // 2. Extract all unique internal links
    const baseUrl = page.url().replace(/\/$/, '');
    const links = await page.evaluate((baseUrl) => {
        const anchors = Array.from(document.querySelectorAll('a[href]'));
        return Array.from(new Set(anchors.map(a => (a as HTMLAnchorElement).href)))
            .filter(href => href.startsWith(baseUrl) || href.startsWith('/'))
            .map(href => href.startsWith('/') ? baseUrl + href : href);
    }, baseUrl);

    console.log(`Found ${links.length} unique internal links. Verifying...`);

    // 3. Verify each link using request.get for speed
    const brokenLinks: string[] = [];
    const verificationResults = await Promise.all(
        links.map(async (link) => {
            try {
                // Skip hash-only links or current page anchors
                if (link.includes('#') && link.split('#')[0] === baseUrl) {
                    return { link, status: 200 };
                }

                const response = await request.get(link);
                if (!response.ok()) {
                    brokenLinks.push(`${link} (Status: ${response.status()})`);
                }
                return { link, status: response.status() };
            } catch (error) {
                brokenLinks.push(`${link} (Error: ${error.message})`);
                return { link, status: -1 };
            }
        })
    );

    // 4. Summarize results
    console.log('Verification Complete:');
    verificationResults.forEach(res => {
        console.log(`[${res.status}] ${res.link}`);
    });

    if (brokenLinks.length > 0) {
        console.error('Broken links found:');
        brokenLinks.forEach(b => console.error(`- ${b}`));
    }

    expect(brokenLinks.length, `Found broken links: ${brokenLinks.join(', ')}`).toBe(0);
});
