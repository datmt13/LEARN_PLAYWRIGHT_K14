import {test} from '@playwright/test'
import FooterTestFollow from '../../test-follow/global/FooterTestFollow';

test.only('footer test follow', async({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const footerTestFollow : FooterTestFollow = new FooterTestFollow(page);
    await footerTestFollow.verify();
});