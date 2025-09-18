const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async () => {
  try{
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{price: process.env.VITE_STRIPE_PRICE_ID, quantity: 1}],
      allow_promotion_codes: true,
      success_url: `${process.env.VITE_SITE_URL}/#/settings?sub=success`,
      cancel_url: `${process.env.VITE_SITE_URL}/#/settings?sub=cancel`,
    })
    return { statusCode: 200, body: JSON.stringify({ url: session.url }) }
  }catch(e){
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
}
