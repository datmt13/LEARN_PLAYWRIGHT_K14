import { Locator } from "@playwright/test";
import FooterInfomationComponent from "./FooterInfomationComponent";
import FooterServiceComponent from "./FooterServiceComponent";

export default class FooterComponent{
    public static selector = '.footer';
    constructor(private component : Locator){
        this.component = component;
    }
    
    footerInfomationComponent():FooterInfomationComponent{
        return new FooterInfomationComponent(this.component.locator(FooterInfomationComponent.selector));
    }

    footerServiceComponent():FooterServiceComponent{
        return new FooterServiceComponent(this.component.locator(FooterServiceComponent.selector))
    }
}