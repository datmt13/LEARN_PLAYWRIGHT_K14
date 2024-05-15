import {test} from '@playwright/test'
import HomePage from '../models/pages/HomePage';

test('Home page', async({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const headerComponent = new HomePage(page).headerComponent();
    const searchComponent = headerComponent.searchComponent();
    await searchComponent.inputSearch().click();
    await searchComponent.inputSearch().fill('laptop');
    await searchComponent.buttonSearch().click();
    await page.waitForTimeout(2000);
});

test('Product title', async({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const pageBodyComponent = await homePage.pageBodyComponent();
    const productListComponent = await pageBodyComponent.productListComponent();
    for(const productItem of productListComponent){
        const productTitle = await productItem.productTitle().innerText();
        const productPrice = await productItem.productPrice().innerText();
        console.log(productTitle);
        console.log(productPrice);
    }
});

test('Footer column', async({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const footerComponent = homePage.footerComponent();
    const footerInfo = footerComponent.footerInfomationComponent();
    const footerService = footerComponent.footerServiceComponent();
    console.log(await footerInfo.footerTitle().textContent());
    console.log(await footerService.footerTitle().innerText());
    const footerLinksInfo = await footerInfo.footerLinks();
    for (const links of footerLinksInfo) {
        console.log(await links.innerText());
    }
    const footerLinksService = await footerService.footerLinks();
    for (const links of footerLinksService) {
        console.log(await links.innerText());
    }
});