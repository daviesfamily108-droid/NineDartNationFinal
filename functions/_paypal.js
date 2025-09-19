async function getAccessToken(){
  const id = process.env.PAYPAL_CLIENT_ID
  const secret = process.env.PAYPAL_CLIENT_SECRET
  const auth = Buffer.from(id+':'+secret).toString('base64')
  const res = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
    method:'POST',
    headers: { 'Authorization': 'Basic '+auth, 'Content-Type':'application/x-www-form-urlencoded' },
    body: 'grant_type=client_credentials'
  })
  if (!res.ok) throw new Error('token failed')
  return res.json()
}
export { getAccessToken }
