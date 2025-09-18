import React, { useEffect, useRef, useState } from 'react'
import { toDataURL } from '../utils/qrcode.js'

export default function QRDialog({onClose}){
  const [url,setUrl] = useState('')
  useEffect(()=>{
    const link = `${import.meta.env.VITE_SITE_URL || window.location.origin}${window.location.pathname}#${encodeURIComponent('offline?camera=1')}`
    toDataURL(link).then(setUrl)
  },[])
  return (
    <div className="card" style={{position:'fixed',right:16,top:60,width:320}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <strong>Connect a Camera</strong>
        <button className="ghost" onClick={onClose}>×</button>
      </div>
      <p className="muted">Scan on your phone to open this screen with the rear camera.</p>
      {url && <div className="qr"><img src={url} width="200" height="200" /></div>}
    </div>
  )
}
