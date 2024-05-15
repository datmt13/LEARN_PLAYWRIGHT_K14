import {test} from '@playwright/test'
import HomePage from '../models/pages/HomePage';

test('Home page', async({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const searchComponent = new HomePage(page).searchComponent();
    await searchComponent.inputSearch().click();
    await searchComponent.inputSearch().fill('laptop');
    await searchComponent.buttonSearch().click();
    await page.waitForTimeout(2000);
});

test.only('Product title', async({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const productListComponent = await homePage.productListComponent();
    for(const productItem of productListComponent){
        const productTitle = await productItem.productTitle().innerText();
        const productPrice = await productItem.productPrice().innerText();
        console.log(productTitle);
        console.log(productPrice);
    }
});