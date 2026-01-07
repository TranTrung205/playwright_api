import {test as base, expect,Page} from '@playwright/test';

export const test = base.extend<{
     token: string;
    loggedInPage: Page;
}>({
    //THÊM TOKEN FIXTURE
    token: async ({request}, use) =>{
        const response = await request.post('https://restful-booker.herokuapp.com/auth', {
            // GÕ LOGIC AUTH
            data:{
                username: 'admin',
                password: 'password123'
            }
    });
    expect (response.status()).toBe(200);
    //TRẢ TOKEN
    const body = await response.json();
    await use(body.token);
    },
    // UI FIXTURE (LOGIN SẴN)
  loggedInPage: async ({ page, token }, use) => {
    await page.goto('https://example.com');

    // Inject token vào UI (tuỳ app: cookie / localStorage)
    await page.evaluate((token) => {
      localStorage.setItem('token', token);
    }, token);

    await page.reload();

    await use(page);
  }   
});
export { expect } from '@playwright/test';
