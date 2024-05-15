import {test} from  '@playwright/test'
import LoginPageMethod01 from '../models/pages/LoginPageMethod01'
test('Login page method 01', async({page})=>{
    const loginPage : LoginPageMethod01 = new LoginPageMethod01(page);
    await page.goto('https://the-internet.herokuapp.com/login');
    await loginPage.inputUserName("tomsmith");
    await loginPage.inputPassword("SuperSecretPassword!1");
    await loginPage.loginButton();
    await page.waitForURL('**/secure');
    await page.waitForTimeout(2000);
})