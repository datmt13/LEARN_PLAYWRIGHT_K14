import { Locator } from "@playwright/test";

export default class BaseFooterColumnComponent{
    private footerTitleLoc = 'h3';
    private footerLinkLoc = 'li a';
    constructor(private component:Locator) {
        this.component = component;
    }

    footerTitle(): Locator{
        return this.component.locator(this.footerTitleLoc);
    }

    footerLinks() : Promise<Locator[]>{
        return this.component.locator(this.footerLinkLoc).all();
    }
}