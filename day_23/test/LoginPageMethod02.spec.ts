import {test} from  '@playwright/test'
import LoginPageMethod02 from '../models/pages/LoginPageMethod02'
test('Login page method 02', async({page})=>{
    const loginPage : LoginPageMethod02 = new LoginPageMethod02(page);
    await page.goto('https://the-internet.herokuapp.com/login');
    await loginPage.inputUserName().fill('tomsmith');
    await loginPage.inputPassword().fill("SuperSecretPassword!");
    await loginPage.loginButton().click();
    await page.waitForURL('**/secure');
    await page.waitForTimeout(2000);
})