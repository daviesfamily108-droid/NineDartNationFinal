import React, { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'
import { useApp } from '../state/store.jsx'

export default function CameraWidget({open,onClose}){
  const { settings, setSettings } = useApp()
  const videoRef = useRef(null)
  const [qr,setQr] = useState('')
  const [error,setError] = useState('')

  useEffect(()=>{
    const url = window.location.origin + '/?camera=open'
    QRCode.toDataURL(url).then(setQr).catch(()=>{})
  },[])

  useEffect(()=>{
    if(!open) return
    let stream
    ;(async()=>{
      setError('')
      try{
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal:'environment' } },
          audio: false
        })
        if(videoRef.current){
          videoRef.current.srcObject = stream
          await videoRef.current.play()
        }
      }catch(e){ setError(e.message || 'Camera error') }
    })()
    return ()=> stream?.getTracks().forEach(t=>t.stop())
  },[open])

  if(!open) return null
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.6)',display:'grid',placeItems:'center',zIndex:60}} onClick={onClose}>
      <div className="card" style={{width:'min(920px,95vw)'}} onClick={e=>e.stopPropagation()}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <strong>Connect a Camera</strong>
          <button className="btn secondary" onClick={onClose}>Close</button>
        </div>
        {error && <p style={{color:'#f87171'}}>{error}</p>}
        <div className="grid cols-2" style={{alignItems:'start', marginTop:12}}>
          <video ref={videoRef} playsInline muted style={{width:'100%',borderRadius:12,background:'#000'}} />
          <div>
            <div className="badge">Scan on your phone</div>
            {qr && <img src={qr} alt="QR" style={{width:220, background:'#fff', padding:10, borderRadius:10}} />}
            <p style={{opacity:.8}}>Opens this site on your phone. Audio is disabled; rear camera is preferred.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
