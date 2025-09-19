import React, { useEffect, useRef, useState } from 'react'
import { openRearCamera } from '../utils/media.js'
export default function Camera(){
  const v=useRef(null)
  const [ok,setOk]=useState(false)
  useEffect(()=>{
    (async()=>{
      try{
        await openRearCamera(v.current)
        setOk(true)
      }catch(e){ console.error(e) }
    })()
  },[])
  return (
    <div className="grid">
      <div className="card">
        <strong>Connect a Camera</strong>
        <div className="cards" style={{gridTemplateColumns:'1fr'}}>
          <video ref={v} playsInline style={{width:'100%',borderRadius:12,background:'#000'}} muted />
          {!ok && <small>Grant camera permission…</small>}
        </div>
      </div>
    </div>
  )
}