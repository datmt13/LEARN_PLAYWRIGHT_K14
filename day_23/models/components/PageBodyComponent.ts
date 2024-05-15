import { Locator } from "@playwright/test";
import { ProductItemComponent } from "./ProductItemComponent";
import FooterComponent from "./global/footer/FooterComponent";

export default class PageBodyComponent{
    public static selector = '.page-body';
    constructor(private component: Locator){
        this.component = component;
    }

    async productListComponent(): Promise<ProductItemComponent[]>{
        const productListComponent = await this.component.locator(ProductItemComponent.selector).all();
        return productListComponent.map(comp => new ProductItemComponent(comp));
    }
}