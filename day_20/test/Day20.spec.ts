import {test} from '@playwright/test'

test('hanld dropdown option', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdownEle = await page.locator('#dropdown');
    await dropdownEle.selectOption({index:1});
    await page.waitForTimeout(3000);
    await dropdownEle.selectOption({value:"2"});
    await page.waitForTimeout(3000);
})

test('Handle iframe', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');
    const iframeEle = await page.frameLocator('iframe[id^="mce"]');
    const bodyIframe = await iframeEle.locator('body p');
    await bodyIframe.click();
    await bodyIframe.clear();
    await bodyIframe.fill('datmt13');
    await page.waitForTimeout(3000);
});

test('hovers narrow searching scope', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const figures = await page.locator('.figure').all();
    for(const figure of figures){
        const img = await figure.locator('img');
        await img.hover();
        await page.waitForTimeout(1000);
    }
});

test.only('dynamic control', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    const checkboxExamEle = await page.locator('#checkbox-example');
    
    const checkboxEle = await checkboxExamEle.locator('#checkbox > input');
    const isEnabled = await checkboxEle.isEnabled();
    const isChecked = await checkboxEle.isChecked();

    console.log(`checkbox isEnabled: ${isEnabled}, isChecked: ${isChecked}`);

    if(!isChecked){
        await checkboxEle.click();
    }
    const isCheckedAfter = await checkboxEle.isChecked();
    console.log(`checkbox isCheckedAfter: ${isCheckedAfter}`);
    await page.waitForTimeout(1000);

    const btnRemoveCheckbox = await checkboxExamEle.locator('button');
    await btnRemoveCheckbox.click();
    await page.waitForSelector('#checkbox-example #checkbox > input', {state: 'hidden'});
    await checkboxExamEle.locator('button').click();
    await page.waitForSelector('#checkbox-example #checkbox', {state: 'attached'});
    await checkboxExamEle.locator('button').click();
    await page.waitForTimeout(3000);



    const inputExamEle = await page.locator('#input-example');
    const inputEle = await inputExamEle.locator('input[type="text"]');
    const isDisabledInput = await inputEle.isDisabled();
    if(isDisabledInput){
        await inputExamEle.locator('button').click();
    }
    await page.waitForSelector('#input-example #message', {state: 'attached'});
    const isEnabledInput = await inputEle.isEnabled();
    if(isEnabledInput){
        await inputEle.fill("datmt13");
        await inputExamEle.locator('button').click();
    }
    await page.waitForSelector('#input-example #message', {state: 'attached'});
    console.log(`message: ${await page.locator('#input-example #message').textContent()}`);
    console.log(`input content: ${await inputEle.inputValue()}`);
})