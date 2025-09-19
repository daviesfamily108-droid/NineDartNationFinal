import { getAccessToken } from './_paypal.js'

export async function handler(event){
  try{
    const { access_token } = await getAccessToken()
    const body = event.body ? JSON.parse(event.body) : {}
    const amount = body.amount || '4.99'
    const res = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
      method:'POST',
      headers: { 'Authorization': 'Bearer '+access_token, 'Content-Type':'application/json' },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{ amount: { currency_code: 'GBP', value: amount } }]
      })
    })
    const json = await res.json()
    return { statusCode: 200, body: JSON.stringify({ id: json.id }) }
  }catch(e){
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
}
