import React from 'react'
export default function ScoreCard({title,player,avg,bestLeg,hits,remaining,lastVisits,legs}){
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
        <div><strong>{player}</strong> <small style={{color:'#94a3b8'}}>{title}</small></div>
        <div style={{fontSize:32,fontWeight:800}}>{remaining}</div>
      </div>
      <div className="cards" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
        <div className="card"><small>3-Dart Avg</small><div style={{fontSize:20,fontWeight:700}}>{avg.toFixed(2)}</div></div>
        <div className="card"><small>Best Leg</small><div style={{fontSize:20,fontWeight:700}}>{bestLeg||'—'}</div></div>
        <div className="card"><small>Hits</small><div>{hits.join(' + ')||'—'}</div></div>
        <div className="card"><small>Last visits</small><div>{lastVisits.join(', ')||'—'}</div></div>
      </div>
      <div style={{marginTop:8}}>
        <small style={{color:'#94a3b8'}}>Legs</small>
        <div>{Array.from({length:legs.total}).map((_,i)=>(
          <span key={i} style={{opacity:i<legs.won?1:.3,marginRight:6}}>●</span>
        ))}</div>
      </div>
    </div>
  )
}