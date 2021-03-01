import { it, expect } from '@playwright/test';
import * as template from '../json/jd-chart.template.json';

// Set the username and password here, you can remove it after testing
const testUserName = '';
const testPassword = '';

// Host where you test the component
const host = 'https://branch.formbird.com';

const login = async (page) => {
    await page.click('input[name="email"]');
    await page.fill('input[name="email"]', testUserName);
    await page.press('input[name="email"]', 'Tab');
    await page.fill('input[name="pass"]', testPassword);
    await page.click('//button[normalize-space(.)=\'Sign in\']');
};


it('JdChart Spec', async ({ page }) => {
    await page.goto(`${host}/form/${template.documentId}`);
    await login(page);

    await page.waitForTimeout(1500);

    await page.waitForSelector('#bodyAngularJS');
});
