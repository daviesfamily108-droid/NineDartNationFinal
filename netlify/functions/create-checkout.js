export async function handler(event){
  return { statusCode: 200, body: JSON.stringify({ url: '/#/?demoCheckout=1' }) }
}