import {Locator, Page} from '@playwright/test'
export default class LoginPageMethod02{
    private userNameLoc : string = '#username';
    private passLoc : string = '#password';
    private btnLoginLoc : string = 'button[type="submit"]';

    constructor(private page: Page){
        this.page = page;
    }

    inputUserName() : Locator{
        return this.page.locator(this.userNameLoc);
    }

     inputPassword() : Locator{
        return this.page.locator(this.passLoc);
    }

     loginButton() : Locator{
        return this.page.locator(this.btnLoginLoc);
    }

}