import { useState, useEffect, useRef } from 'react'
import { useApp } from '../store/store'
import { getBackCameraStream } from '../utils/media'
import { makeQrCanvas } from '../utils/qr'
import { loadPayPal } from '../utils/paypal'

export default function TopBar(){
  const { user, setSubscribed, saveCamera } = useApp()
  const [openCam, setOpenCam] = useState(false)
  const [openPay, setOpenPay] = useState(false)

  return (
    <div className="topbar">
      <button className="btn secondary" onClick={()=>setOpenCam(true)}>+ Camera</button>
      <button className="btn" onClick={()=>setOpenPay(true)}>{user?.subscribed?'Subscribed':'Subscribe'}</button>

      {openCam && <CameraModal onClose={()=>setOpenCam(false)} onSaved={()=>{saveCamera(); setOpenCam(false)}}/>}
      {openPay && <SubscribeModal onClose={()=>setOpenPay(false)} onActive={()=>{ setSubscribed(true); setOpenPay(false) }}/>}      
    </div>
  )
}

function CameraModal({ onClose, onSaved }){
  const videoRef = useRef(null)
  const [zoom, setZoom] = useState(1)
  useEffect(()=>{
    let stream
    (async ()=>{
      try { 
        stream = await getBackCameraStream({ audio:false })
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      } catch(e){ console.error(e) }
    })()
    return ()=> stream && stream.getTracks().forEach(t=>t.stop())
  },[])

  return (
    <div className="modal">
      <div className="panel" style={{width:560}}>
        <div className="camera-box">
          <video className="cam-video" ref={videoRef} style={{transform:`scale(${zoom})`, transformOrigin:'center'}} muted playsInline></video>
          <input className="zoom" type="range" min="1" max="2.5" step="0.01" value={zoom} onChange={e=>setZoom(parseFloat(e.target.value))} />
          <div style={{display:'flex', gap:8, justifyContent:'flex-end'}}>
            <button className="btn ghost" onClick={onClose}>Close</button>
            <button className="btn" onClick={onSaved}>Save ✓</button>
          </div>
        </div>
        <QrRow/>
      </div>
    </div>
  )
}

function QrRow(){
  const wrapRef = useRef(null)
  useEffect(()=>{
    (async ()=>{
      const url = window.location.origin + '/#/camera'
      const canvas = await makeQrCanvas(url)
      if (wrapRef.current){
        wrapRef.current.innerHTML=''
        wrapRef.current.appendChild(canvas)
      }
    })()
  },[])
  return <div style={{marginTop:12}}><div className="badge">Scan on phone to open camera link:</div><div ref={wrapRef} className="qr" /></div>
}

function SubscribeModal({ onClose, onActive }){
  const [loading, setLoading] = useState(false)
  const btnRef = useRef(null)

  useEffect(()=>{
    (async ()=>{
      setLoading(true)
      try{
        const res = await fetch('/.netlify/functions/paypal-env'); // returns client id & mode
        const { clientId, planId } = await res.json()
        const paypal = await loadPayPal(clientId, planId ? 'vault=true&intent=subscription' : 'intent=capture')
        paypal.Buttons({
          createSubscription: planId ? function(data, actions){
            return fetch('/.netlify/functions/paypal-create-subscription', { method:'POST' })
              .then(r=>r.json()).then(({ id })=> id )
          } : undefined,
          onApprove: function(data, actions){
            if (data.subscriptionID){ onActive(); return }
            return fetch('/.netlify/functions/paypal-capture-order', { method:'POST', body: JSON.stringify({ orderID: data.orderID })})
              .then(r=>r.json()).then(()=> onActive())
          },
          createOrder: !planId ? function(){
            return fetch('/.netlify/functions/paypal-create-order',{ method:'POST', body: JSON.stringify({ amount:'4.99'})})
              .then(r=>r.json()).then(({ id })=> id )
          } : undefined,
          style: { layout:'vertical', color:'gold', shape:'pill', label: planId?'subscribe':'pay' }
        }).render(btnRef.current)
      }catch(e){ console.error(e) }
      finally{ setLoading(false) }
    })()
  },[])

  return (
    <div className="modal">
      <div className="panel">
        <div className="badge">Support Nine Dart Nation</div>
        <div ref={btnRef} style={{marginTop:12}}>{loading && <div>Loading PayPal…</div>}</div>
        <div style={{display:'flex', justifyContent:'flex-end', marginTop:12}}>
          <button className="btn ghost" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
