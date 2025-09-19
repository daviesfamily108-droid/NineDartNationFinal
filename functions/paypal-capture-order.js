import { getAccessToken } from './_paypal.js'

export async function handler(event){
  try{
    const { access_token } = await getAccessToken()
    const { orderID } = JSON.parse(event.body||'{}')
    const res = await fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`, {
      method:'POST',
      headers: { 'Authorization': 'Bearer '+access_token }
    })
    const json = await res.json()
    return { statusCode: 200, body: JSON.stringify(json) }
  }catch(e){
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
}
