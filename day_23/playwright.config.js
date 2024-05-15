const {defineConfig, devices} = require('@playwright/test')
module.exports = defineConfig({
    testDir : './test',
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']}
        }
    ],
    reporter:'html',
    //retries: process.evn.CI ? 2 : 1,
    use:{
        actionTimeout: 5000,
        trace: 'on-first-retry',
        video:'on-first-retry',
        screenshot: 'only-on-failure',
    }
})