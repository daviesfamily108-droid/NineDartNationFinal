import React,{ useEffect, useRef, useState } from 'react'

export function HelpWidget(){
  const [open,setOpen]=useState(false)
  const [history,setHistory]=useState([{from:'bot',text:'Hi! I\'m your site assistant. How can I help?'}])
  const lastTypedRef = useRef(Date.now())

  useEffect(()=>{
    const id=setInterval(()=>{
      if(!open) return
      const idle = Date.now()-lastTypedRef.current
      if(idle>90_000){
        setHistory(h=>[...h,{from:'bot',text:"I’ve not heard from you in a while — reply or I’ll close the chat."}])
        lastTypedRef.current = Date.now()
      }
    },10_000)
    return ()=>clearInterval(id)
  },[open])

  const save = () => {
    const text = history.map(m=>`${m.from}: ${m.text}`).join('\n')
    const blob = new Blob([text],{type:'text/plain'})
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'help-transcript.txt'
    a.click()
  }

  return (
    <div className="help">
      {open && (
        <div className="card" style={{width:320,maxHeight:420,overflow:'auto'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
            <strong>Help</strong>
            <div>
              <button className="btn ghost" onClick={()=>setOpen(false)} style={{marginRight:6}}>–</button>
              <button className="btn ghost" onClick={()=>setOpen(false)}>✕</button>
            </div>
          </div>
          <div className="cards" style={{gridTemplateColumns:'1fr'}}>
            {history.map((m,i)=>(
              <div key={i} className="card" style={{background:'#111827'}}>
                <small style={{color:'#94a3b8'}}>{m.from}</small>
                <div>{m.text}</div>
              </div>
            ))}
          </div>
          <div style={{display:'flex',gap:6,marginTop:8}}>
            <button className="btn" onClick={()=>setHistory(h=>[...h,{from:'bot',text:'Try the Settings page for account changes.'}])}>Tips</button>
            <button className="btn ghost" onClick={save}>Save transcript</button>
          </div>
        </div>
      )}
      {!open && <button className="btn" onClick={()=>setOpen(true)}>Help</button>}
    </div>
  )
}