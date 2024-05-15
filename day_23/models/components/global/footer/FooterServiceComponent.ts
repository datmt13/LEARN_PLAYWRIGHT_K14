import { Locator } from "@playwright/test";
import BaseFooterColumn from "./BaseFooterColumnComponent";

export default class FooterServiceComponent extends BaseFooterColumn{
    public static selector = '.customer-service';
    constructor(component: Locator){
        super(component);
    }
}