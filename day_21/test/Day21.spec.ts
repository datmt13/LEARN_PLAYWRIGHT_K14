import {Page, test} from '@playwright/test'
const url = 'https://the-internet.herokuapp.com/javascript_alerts';
test('js alert', async({page})=>{
   await page.goto(url);
    page.on('dialog', async dialog => { 
        await dialog.accept();
    });

    await page.locator('[onclick="jsAlert()"]').click();
    await page.waitForTimeout(3000);
});

test('js confirm', async({page})=>{
    await page.goto(url);
    page.on('dialog', async dialog=>{
        console.log(`alert content: ${dialog.message()}`);
        await dialog.dismiss();
    })

    await page.locator('[onclick="jsConfirm()"]').click();
    await page.waitForTimeout(3000);
});

test('js prompt', async({page})=>{
    await page.goto(url);
    page.on('dialog', async dialog=>{
        console.log(`alert content: ${dialog.message()}`);
        await dialog.accept('datmt');
    })

    await page.locator('[onclick="jsPrompt()"]').click();
    await page.waitForTimeout(3000);
});

test('floating menu', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/floating_menu');
    await page.evaluate(()=>{
        window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(3000);
})

test.only('floating menu with param', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/floating_menu');
    await scrollToBottom(page,0.5);
    await page.waitForTimeout(3000);
})

async function scrollToBottom(page: Page, percen : number) {
    await page.evaluate(scrollPercen=>{
        window.scrollTo(0,scrollPercen * document.body.scrollHeight);
    }, percen);
};