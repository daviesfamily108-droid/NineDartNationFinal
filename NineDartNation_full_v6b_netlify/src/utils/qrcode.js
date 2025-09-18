import QRCode from 'qrcode'
export async function toDataURL(text){
  return await QRCode.toDataURL(text, { margin: 1, width: 200 })
}
