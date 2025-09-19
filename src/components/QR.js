import React from 'react'
import QRCode from 'qrcode'

export async function generateQR(text){
  return await QRCode.toDataURL(text,{margin:1,width:220,color:{dark:'#111827',light:'#e5e7eb'}})
}