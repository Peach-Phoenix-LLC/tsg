const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '../../../../');
const TEST_ARG = process.argv[2];

if (!TEST_ARG) {
    console.log('Usage: node run_tests.js <test-file>');
    process.exit(1);
}

// Normalize the test file path
// If the user passes "test_homepage.spec.ts", we want "e2e/test_homepage.spec.ts"
// If the user passes "e2e/test_homepage.spec.ts", we keep it.
let relativePath = TEST_ARG;
if (!relativePath.startsWith('e2e') && !relativePath.includes('/') && !relativePath.includes('\\')) {
    relativePath = path.join('e2e', relativePath);
}

// Convert backslashes to forward slashes for cross-platform consistency in Playwright command
relativePath = relativePath.replace(/\\/g, '/');

console.log(`🧪 Test: ${relativePath}`);

try {
    // Execute from project root
    execSync(`npx playwright test "${relativePath}" --reporter=line,html`, {
        stdio: 'inherit',
        cwd: PROJECT_ROOT
    });
    console.log('✅ Test passed!');
} catch (error) {
    console.error('❌ Test failed.');
    process.exit(1);
}
