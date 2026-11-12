


{
[0]   orderId: '46M15393P96921435',
[0]   captureId: '5M794511J09403541',
[0]   status: 'COMPLETED',
[0]   currency: 'USD',
[0]   grossAmount: 2.99,
[0]   paypalFee: 0.4,
[0]   netAmount: 2.59,
[0]   payerId: '4C2BVYPPLMZFA',
[0]   payerEmail: 'dokany.stores@gmail.com',
[0]   payerName: 'Adam Ewis',
[0]   sellerProtection: 'ELIGIBLE',
[0]   captureDate: 2026-11-12T05:58:23.000Z
[0] }




















this is the cuptured  {
[0]   id: '64T50669LV831220A',
[0]   status: 'COMPLETED',
[0]   amount: { currency_code: 'USD', value: '2.99' },
[0]   final_capture: true,
[0]   seller_protection: {
[0]     status: 'ELIGIBLE',
[0]     dispute_categories: [ 'ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION' ]
[0]   },
[0]   seller_receivable_breakdown: {
[0]     gross_amount: { currency_code: 'USD', value: '2.99' },
[0]     paypal_fee: { currency_code: 'USD', value: '0.40' },
[0]     net_amount: { currency_code: 'USD', value: '2.59' }
[0]   },
[0]   links: [
[0]     {
[0]       href: 'https://api.sandbox.paypal.com/v2/payments/captures/64T50669LV831220A',
[0]       rel: 'self',
[0]       method: 'GET'
[0]     },
[0]     {
[0]       href: 'https://api.sandbox.paypal.com/v2/payments/captures/64T50669LV831220A/refund',
[0]       rel: 'refund',
[0]       method: 'POST'
[0]     },
[0]     {
[0]       href: 'https://api.sandbox.paypal.com/v2/checkout/orders/0WP277285Y035773J',
[0]       rel: 'up',
[0]       method: 'GET'
[0]     }
[0]   ],
[0]   create_time: '2026-11-12T04:40:47Z',
[0]   update_time: '2026-11-12T04:40:47Z'
[0] }










[0] this is the the full data   {
[0]   id: '0WP277285Y035773J',
[0]   status: 'COMPLETED',
[0]   payment_source: {
[0]     paypal: {
[0]       email_address: 'dokany.stores@gmail.com',
[0]       account_id: '4C2BVYPPLMZFA',
[0]       account_status: 'VERIFIED',
[0]       name: [Object],
[0]       address: [Object]
[0]     }
[0]   },
[0]   purchase_units: [
[0]     { reference_id: 'default', shipping: [Object], payments: [Object] }
[0]   ],
[0]   payer: {
[0]     name: { given_name: 'Adam', surname: 'Ewis' },
[0]     email_address: 'dokany.stores@gmail.com',
[0]     payer_id: '4C2BVYPPLMZFA',
[0]     address: { country_code: 'KW' }
[0]   },
[0]   links: [
[0]     {
[0]       href: 'https://api.sandbox.paypal.com/v2/checkout/orders/0WP277285Y035773J',
[0]       rel: 'self',
[0]       method: 'GET'
[0]     }
[0]   ]
[0] }