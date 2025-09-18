import React, { useEffect, useRef, useState } from 'react'
import { openRearCamera } from '../utils/camera.js'

export default function CameraPanel(){
  const v = useRef(null)
  const [err,setErr]=useState('')
  useEffect(()=>{
    if(!navigator.mediaDevices){ setErr('No camera available'); return }
    openRearCamera(v.current).catch(e=>setErr(e.message))
  },[])
  return (
    <div className="panel">
      <strong>Camera</strong>
      <video ref={v} className="cameraPreview" muted playsInline></video>
      {err && <div className="badge" style={{marginTop:8,display:'inline-block'}}>Camera: {err}</div>}
    </div>
  )
}
