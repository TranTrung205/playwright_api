import { test, expect } from '@playwright/test';

test('AUTH + UPDATE booking', async ({ request }) => {
  // 1. AUTH
  const authResponse = await request.post(
    'https://restful-booker.herokuapp.com/auth',
    {
      data: {
        username: 'admin',
        password: 'password123'
      }
    }
  );

  expect(authResponse.status()).toBe(200);

  const authBody = await authResponse.json();
  const token = authBody.token;
  console.log('TOKEN:', token);

  // 2. CREATE booking (để có id)
  const createResponse = await request.post(
    'https://restful-booker.herokuapp.com/booking',
    {
      data: {
        firstname: 'Jane',
        lastname: 'Smith',
        totalprice: 200,
        depositpaid: true,
        bookingdates: {
          checkin: '2024-02-01',
          checkout: '2024-02-05'
        },
        additionalneeds: 'Lunch'
      }
    }
  );

  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;
  console.log('BOOKING ID:', bookingId);

  // 3. UPDATE booking
  const updateResponse = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`
      },
      data: {
        firstname: 'Jane',
        lastname: 'Updated',
        totalprice: 300,
        depositpaid: false,
        bookingdates: {
          checkin: '2024-03-01',
          checkout: '2024-03-10'
        },
        additionalneeds: 'Dinner'
      }
    }
  );

  expect(updateResponse.status()).toBe(200);

  const updateBody = await updateResponse.json();
  console.log(updateBody);

  expect(updateBody.lastname).toBe('Updated');
});