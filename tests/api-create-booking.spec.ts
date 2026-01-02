import { test, expect } from '@playwright/test';

test('POST create booking', async ({ request }) => {
  const response = await request.post(
    'https://restful-booker.herokuapp.com/booking',
    {
      data: {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 123,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-01-01',
          checkout: '2026-01-05'
        },
        additionalneeds: 'Breakfast'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);

  expect(body.bookingid).toBeTruthy();
  expect(body.booking.firstname).toBe('John');
});
