import { Page } from "@playwright/test";
import HomePage from "../../models/pages/HomePage";

export default class FooterTestFollow{
    constructor(private page: Page){
        this.page = page;
    }

    async verify():Promise<void>{
       await this.verifyInfomation();
    }

    private async verifyInfomation():Promise<void>{
        var homePage : HomePage = new HomePage(this.page);
        const footerComponent = homePage.footerComponent();
        const footerInfo = footerComponent.footerInfomationComponent();
        console.log(await footerInfo.footerTitle().innerText());
    }
}