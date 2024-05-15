import { Locator } from "@playwright/test";
import BaseFooterColumn from "./BaseFooterColumnComponent";

export default class FooterInfomationComponent extends BaseFooterColumn{
    public static selector = '.information';
    constructor(component: Locator){
        super(component);
    }
}