# Nine Dart Nation (full v8.5)

Vite + React SPA with Netlify Functions and PayPal (Checkout or Subscriptions).

## Quickstart
```bash
npm i
npm run dev
```
### Deploy to Netlify
- Set Build command: `npm run build`
- Publish: `dist`
- Functions: `functions`
- Add env vars: `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, (optional) `PAYPAL_PLAN_ID`, `APP_BASE_URL`

### PayPal (Sandbox)
- Use your Sandbox **Client ID**/**Secret** and (optionally) a **plan_id** for Subscriptions.
- The UI will prefer Subscriptions if `PAYPAL_PLAN_ID` exists, otherwise defaults to single purchase checkout.
