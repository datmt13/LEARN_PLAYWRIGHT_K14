import {Page} from '@playwright/test'
export default class LoginPageMethod01{
    private userNameLoc : string = '#username';
    private passLoc : string = '#password';
    private btnLoginLoc : string = 'button[type="submit"]';

    constructor(private page: Page){
        this.page = page;
    }

    async inputUserName(userName: string){
        await this.page.locator(this.userNameLoc).fill(userName);
    }

    async inputPassword(password: string){
        await this.page.locator(this.passLoc).fill(password);
    }

    async loginButton(){
        await this.page.locator(this.btnLoginLoc).click();
    }

}