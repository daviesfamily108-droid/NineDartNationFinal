import React, { useEffect, useRef, useState } from 'react'

export default function HelpWidget(){
  const [open, setOpen] = useState(false)
  const [history, setHistory] = useState([{from:'bot', text:`Hi! I'm your site assistant. How can I help?`}])
  const [input, setInput] = useState('')
  const lastTypeRef = useRef(Date.now())

  useEffect(()=>{
    const id = setInterval(()=>{
      if(!open) return
      if(Date.now() - lastTypeRef.current > 90_000){
        setHistory(h=>[...h, {from:'bot', text:`I haven't heard from you in a while—reply or I’ll close this chat.`}])
        clearInterval(id)
      }
    }, 5_000)
    return ()=> clearInterval(id)
  }, [open])

  const send = ()=>{
    if(!input.trim()) return
    lastTypeRef.current = Date.now()
    setHistory(h=>[...h, {from:'you', text: input.trim()}])
    setInput('')
    setTimeout(()=>{
      setHistory(h=>[...h, {from:'bot', text:`Thanks! I’ve logged that. If you want a transcript, click Save.`}])
    }, 700)
  }

  const save = ()=>{
    const blob = new Blob([history.map(m=>`${m.from}: ${m.text}`).join('\n')], {type:'text/plain'})
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'NineDartNation-help.txt'
    a.click()
  }

  return (
    <div className="help">
      {!open && <button onClick={()=>setOpen(true)}>Help</button>}
      {open && (
        <div className="card" style={{width:300}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
            <strong>Help</strong>
            <div style={{display:'flex',gap:6}}>
              <button className="ghost" onClick={save}>Save</button>
              <button className="ghost" onClick={()=>setOpen(false)}>×</button>
            </div>
          </div>
          <div style={{height:180,overflow:'auto',background:'#0b2239',borderRadius:8,padding:8,marginBottom:8}}>
            {history.map((m,i)=>(<div key={i} style={{opacity:m.from==='bot'?0.9:1}}><span className="badge">{m.from}</span> {m.text}</div>))}
          </div>
          <div style={{display:'flex',gap:6}}>
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type…" style={{flex:1,borderRadius:8,border:'1px solid #234a78',background:'#06172b',color:'#fff',padding:'8px 10px'}}/>
            <button onClick={send} className="primary">Send</button>
          </div>
        </div>
      )}
    </div>
  )
}
