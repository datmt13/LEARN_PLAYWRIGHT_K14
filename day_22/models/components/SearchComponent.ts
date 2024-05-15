import { Locator } from "@playwright/test";

export default class SearchComponent{
    public static selector = '.search-box';
    private inputSearchLoc : string = '#small-searchterms';
    private btnSearchLoc : string = 'input[type="submit"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    inputSearch() : Locator {
        return this.component.locator(this.inputSearchLoc);
    }

    buttonSearch() : Locator {
        return this.component.locator(this.btnSearchLoc);
    }
}