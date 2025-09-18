import React, { useEffect, useState } from 'react'
export default function Countdown({seconds=15,onDone}){
  const [t,setT]=useState(seconds)
  useEffect(()=>{ if(t<=0){ onDone?.(); return } const id=setTimeout(()=>setT(t-1),1000); return ()=>clearTimeout(id) },[t])
  return <span className="badge">Starts in: {t}s</span>
}
