import {test , expect} from '@playwright/test';

// test('API GET', async({request})=>{
//     const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
//     expect(response.status()).toBe(200);
//     const body = await response.json();
//     expect(body).toHaveProperty('id', 1);
//     expect(body).toHaveProperty('title'); 
// });

// test('API POST', async({request}) => {
//     const response = await request.post('https://jsonplaceholder.typicode.com/posts',{
//       data: {
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//       } 
//     }
// );
//       expect(response.status()).toBe(201);
//       const body = await response.json();
//         expect(body).toHaveProperty('id');
// });

test('API PUT', async({request}) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',{
        data: {
            id:1,
            title:'update title',
            userId :1,
            body: 'update body'
        }
    }   
);  
expect(response.status()).toBe(200);
const body = await response.json();
expect (body).toHaveProperty('title', 'update title');
});


test('API PATCH', async({request})=>{
    const respone = await request.patch('https://jsonplaceholder.typicode.com/posts/1',{
        data: {
            title: 'patched title'
        }
    });
    expect (respone.status()).toBe(200);
    const body = await respone.json();
    expect (body).toHaveProperty('title', 'patched title');
});

test('API Delete', async({request}) =>{
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    
});