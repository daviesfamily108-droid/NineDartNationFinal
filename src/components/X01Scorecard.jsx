import React, { useMemo, useState } from 'react'
import { threeDartAverage } from '../games/x01Core.js'
const QUICK=[180,140,100,81,60,45,41,26,20,1]
export default function X01Scorecard({player,isActive,onSubmitVisit,label='Enter score'}){
  const [typed,setTyped]=useState('')
  const avg = useMemo(()=>threeDartAverage(player).toFixed(2),[player])
  const submit=(sum)=>{
    if(typeof sum!=='number'){ const n=Number(typed); if(!Number.isFinite(n)||n<0)return; sum=n }
    setTyped(''); onSubmitVisit([sum])
  }
  return (
    <div className="card" style={{opacity:isActive?1:.7, outline:isActive?'2px solid var(--brand)':'none'}}>
      <div style={{display:'flex',justifyContent:'space-between',gap:12,alignItems:'center'}}>
        <div style={{display:'flex',gap:10,alignItems:'center'}}><div style={{width:36,height:36,borderRadius:999,background:'#27415e'}}/><div><div style={{fontWeight:800}}>{player.name} {isActive&&<span className="badge">YOU</span>}</div><div className="badge" style={{opacity:.8}}>Checkout —</div></div></div>
        <div style={{textAlign:'right'}}><div className="badge">Remaining</div><div style={{fontSize:36,fontWeight:900,lineHeight:1}}>{player.remaining}</div></div>
      </div>
      <div className="grid cols-3" style={{marginTop:12}}>
        <div className="card"><div className="badge">3‑Dart Avg</div><div style={{fontSize:22,fontWeight:800}}>{avg}</div></div>
        <div className="card"><div className="badge">Best Leg</div><div style={{fontSize:22,fontWeight:800}}>{player.bestLeg||'—'}</div></div>
        <div className="card"><div className="badge">Legs</div><div style={{fontSize:22,fontWeight:800}}>{player.legs}</div></div>
      </div>
      <div className="badge" style={{display:'block',marginTop:10}}>Last visits</div>
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:6}}>
        {player.lastVisits.length===0 && <span style={{opacity:.7}}>—</span>}
        {player.lastVisits.map((v,i)=>(<span key={i} className="badge" style={{background:v.bust?'#4b1f28':'#203954'}}>{v.sum}{v.bust?' (bust)':''}</span>))}
      </div>
      <div style={{marginTop:12}}>
        <div className="badge">{label}</div>
        <div className="row" style={{marginTop:8}}>
          {QUICK.map(n=>(<button key={n} className="btn secondary" disabled={!isActive} onClick={()=>submit(n)}>{n}</button>))}
          <button className="btn ghost" disabled={!isActive} onClick={()=>submit(0)}>No Score</button>
          <input value={typed} onChange={e=>setTyped(e.target.value)} inputMode="numeric" placeholder="Type score" />
          <button className="btn" disabled={!isActive} onClick={()=>submit()}>Enter</button>
        </div>
      </div>
    </div>
  )
}
