export async function handler(){
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clientId: process.env.PAYPAL_CLIENT_ID, planId: process.env.PAYPAL_PLAN_ID || null })
  }
}