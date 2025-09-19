import { getAccessToken } from './_paypal.js'

export async function handler(){
  try{
    const { access_token } = await getAccessToken()
    const plan_id = process.env.PAYPAL_PLAN_ID
    if (!plan_id) return { statusCode: 400, body: JSON.stringify({ error: 'No PAYPAL_PLAN_ID configured' }) }
    const res = await fetch('https://api-m.sandbox.paypal.com/v1/billing/subscriptions', {
      method:'POST',
      headers: { 'Authorization':'Bearer '+access_token, 'Content-Type':'application/json' },
      body: JSON.stringify({ plan_id })
    })
    const json = await res.json()
    return { statusCode: 200, body: JSON.stringify({ id: json.id }) }
  }catch(e){
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
}
