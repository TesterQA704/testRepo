import { test, expect } from '@playwright/test';

test.describe('Test Login Website2 Kalbe', () => {

    test('amon positive login', async ({ page }) => {

        //Login
        await page.goto('https://amon.kalbe.co.id/Lgn');
        await page.getByLabel('firstname.lastname@compdomain').fill('faiz.syukri@kalbe.co.id');
        await page.getByLabel('Password').fill('Kalbefarma2024!');
        await page.getByRole('button', { name: ' Login' }).click();

        //Verify Homepage Heading Text
        await expect(page.getByRole('heading', { name: 'My Task' })).toBeVisible();
        const headingText = await page.getByRole('heading', { name: 'My Task' }).textContent();
        expect(headingText).toBe('My Task');

        //Logout
        const logOutIcon = page.locator("//li[@class='nav-item dropdown']");
        await logOutIcon.click();
        await page.getByRole('link', { name: ' Log Out' }).click();

        //Verify URL
        const currentURL = page.url();
        expect(currentURL).toBe('https://amon.kalbe.co.id/Lgn');

    });

    test('bsCorp positive login', async ({ page }) => {

        //Login
        await page.goto('https://bscorp.kalbe.co.id/');
        await page.getByPlaceholder('firstname.lastname@compdomain').fill('faiz.syukri@kalbe.co.id');
        await page.getByPlaceholder('Password').fill('Kalbefarma2024!');
        await page.getByRole('button', { name: 'Log in' }).click();

        //Verify
        await expect(page.getByRole('link', { name: 'My Task' })).toBeVisible();
        const headingText = await page.getByRole('link', { name: 'My Task' }).textContent();
        expect(headingText).toBe('My Task');

        //Logout
        await page.getByRole('link', { name: ' Logout' }).click();

        //Verify URL
        const currentURL = page.url();
        expect(currentURL).toBe('https://bscorp.kalbe.co.id/login2.html');

    });

    test('ils positive login', async ({ page }) => {

        //Login
        await page.goto('https://ils.kalbe.co.id/');
        await page.getByPlaceholder('Your Username').fill('faiz.syukri@kalbe.co.id');
        await page.getByPlaceholder('Your Password').fill('Kalbefarma2024!');
        await page.getByRole('button', { name: ' LOG IN' }).click();

        //Verify
        await expect(page.getByRole('heading', { name: 'My Task' })).toBeVisible();
        const headingText = await page.getByRole('heading', { name: 'My Task' }).textContent();
        expect(headingText).toBe('My Task');

        //Logout
        const logOutIcon = page.locator("//li[@class='nav-item dropdown']");
        await logOutIcon.click();
        await page.getByRole('link', { name: ' Log Out' }).click();

        //Verify URL
        const currentURL = page.url();
        expect(currentURL).toBe('https://ils.kalbe.co.id/');

    });

    test('kation positive login', async ({ page }) => {

        //Login
        await page.goto('https://innovation.kalbe.co.id/');
        await page.getByPlaceholder('user.domain@kalbe.co.id').fill('faiz.syukri@kalbe.co.id');
        await page.getByPlaceholder('Password User Domain Onekalbe').fill('Kalbefarma2024!');
        await page.getByRole('button', { name: 'Login' }).click();

        //Verify
        await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
        const headingText = await page.getByRole('link', { name: 'Home' }).textContent();
        expect(headingText).toBe('Home');

        //Logout
        const logOutIcon = page.locator("//body/div[@id='__next']/div[1]/div[1]/div[1]/div[2]/div[1]");
        await logOutIcon.hover();
        await page.getByRole('menuitem', { name: 'Logout' }).click();

        //Verify Login Button
        await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
        const loginButton = await page.getByRole('button', { name: 'Login' }).textContent();
        expect(loginButton).toBe('Login');



    });

    test('momonline positive login', async ({ page }) => {

        //Login
        await page.goto('https://momonline.kalbe.co.id/');
        await page.getByPlaceholder('login menggunakan user').fill('faiz.syukri@kalbe.co.id');
        await page.getByPlaceholder('password').fill('Kalbefarma2024!');
        await page.getByRole('button', { name: '   Login' }).click();

        //Verify
        await expect(page.getByRole('heading', { name: 'My Task' })).toBeVisible();
        const headingText = await page.getByRole('heading', { name: 'My Task' }).textContent();
        expect(headingText).toBe('My Task');

        //Logout
        await page.getByRole('link', { name: ' Logout' }).click();

        //Verify URL
        const currentURL = page.url();
        expect(currentURL).toBe('https://momonline.kalbe.co.id/');

    });

    test('PLM positive login', async ({ page }) => {

        //Login
        await page.goto('https://plm.kalbe.co.id/');
        await page.getByPlaceholder('ex: user.plm@kalbe.co.id').fill('faiz.syukri@kalbe.co.id');
        await page.getByPlaceholder('Enter your password').fill('Kalbefarma2024!');
        await page.getByRole('button', { name: 'LOGIN' }).click();

        //Verify
        await expect(page.locator('h1').getByRole('link')).toBeVisible();

        //Logout
        await page.getByRole('link', { name: 'Logout' }).click();

        //Verify URL
        const currentURL = page.url();
        expect(currentURL).toBe('https://plm.kalbe.co.id/Account/Login');

        //Wilbur haratua

    });

});