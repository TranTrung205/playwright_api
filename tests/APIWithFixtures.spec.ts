

import {test, expect} from '../fixtures/auth.fixture';

test('API GET', async ({token})=>{
    expect(token).toBeTruthy();
    console.log('Token received in test:', token);
});