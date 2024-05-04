import {chromium, Browser, Page, BrowserContext} from 'playwright';
import {test} from '@playwright/test'

test('Login Test',async ()=>{
    const browser : Browser = await chromium.launch();
    const context : BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto("https://stackoverflow.com/questions/12940626/github-error-message-permission-denied-publickey");
    await page.close();
    await browser.close();
});

test.only('Login Test 2',async ({page})=>{
    await page.goto("https://stackoverflow.com/questions/12940626/github-error-message-permission-denied-publickey");
    await page.waitForTimeout(3000)
    await page.close();
});