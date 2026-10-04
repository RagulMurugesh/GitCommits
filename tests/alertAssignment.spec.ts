import {test, expect} from '@playwright/test';

test('Test to verify alert message', async ({page}) => {

    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');
    await page.waitForTimeout(5000);

    //To handle the alert message
    page.on('dialog', async dialog => {
        //To verify the alert message
        let alertMessage = dialog.message();
        console.log('Alert message is: ' + alertMessage);
        expect(dialog.message()).toBe('Press a button!');
        await dialog.accept();
    })

    //To click the try it button
    await page.frameLocator('#iframeResult').locator('//button[text()="Try it"]').click();
    await page.waitForTimeout(5000);
    

   
})