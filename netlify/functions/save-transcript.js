export async function handler(event){
  const body = JSON.parse(event.body||'{}')
  console.log('transcript lines', (body?.text||'').length)
  return { statusCode: 200, body: JSON.stringify({ok:true}) }
}