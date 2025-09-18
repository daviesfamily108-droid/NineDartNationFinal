import React, { useEffect, useRef, useState } from 'react'
export default function HelpWidget(){
  const [open,setOpen]=useState(false)
  const [input,setInput]=useState('')
  const [history,setHistory]=useState([{from:'bot',text:"Hi! I'm your site assistant. How can I help?"}])
  const last=useRef(Date.now())
  const idle=45000
  useEffect(()=>{
    const t=setInterval(()=>{
      if(!open) return
      if(Date.now()-last.current>idle){
        setHistory(h=>[...h,{from:'bot',text:"I’ve not heard from you in a while, reply to keep chatting or the chat will close."}])
        clearInterval(t)
      }
    },2000)
    return ()=>clearInterval(t)
  },[open])
  const send=()=>{
    if(!input.trim()) return
    last.current=Date.now()
    setHistory(h=>[...h,{from:'you',text:input.trim()}])
    setInput('')
    setTimeout(()=>setHistory(h=>[...h,{from:'bot',text:"Thanks! For account or subscription help, try Settings → Admin Panel. Use Save to export this transcript."}]),600)
  }
  const save=()=>{
    const text = history.map(m=>`${m.from}: ${m.text}`).join('\n')
    const blob = new Blob([text], {type:'text/plain'})
    const url = URL.createObjectURL(blob); const a=document.createElement('a')
    a.href=url; a.download='support-chat.txt'; a.click(); URL.revokeObjectURL(url)
  }
  return (
    <div style={{position:'fixed',right:16,bottom:16,zIndex:55}}>
      {!open && <button className="btn" onClick={()=>setOpen(true)}>Help</button>}
      {open && (
        <div className="card" style={{width:340,maxHeight:420,display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <strong>Assistant</strong>
            <div className="row"><button className="btn ghost" onClick={save}>Save</button><button className="btn secondary" onClick={()=>setOpen(false)}>Close</button></div>
          </div>
          <div style={{flex:1,overflow:'auto',display:'flex',flexDirection:'column',gap:8,marginTop:8}}>
            {history.map((m,i)=>(<div key={i} style={{alignSelf:m.from==='you'?'flex-end':'flex-start',background:'#203954',padding:'8px 10px',borderRadius:10}}><small style={{opacity:.7,marginRight:6}}>{m.from}:</small>{m.text}</div>))}
          </div>
          <div className="row" style={{marginTop:8}}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Type a message…" style={{flex:1}} />
            <button className="btn" onClick={send}>Send</button>
          </div>
        </div>
      )}
    </div>
  )
}
