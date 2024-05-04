const {defineConfig, devices} = require('@playwright/test')
module.exports = defineConfig({
    testDir : './test',
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']}
        }
    ],
    reporter:'html'
})