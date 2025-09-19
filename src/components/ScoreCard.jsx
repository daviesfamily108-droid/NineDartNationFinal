export default function ScoreCard({ player, remaining=501, stats={}, onScore }){
  const btns = [180,140,100,81,60,45,41,26,20,1]
  return (
    <div className="card">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
        <div style={{fontWeight:800}}>{player}</div>
        <div className="kpis"><div className="kpi">Remaining <b>{remaining}</b></div></div>
      </div>
      <div className="row" style={{marginTop:8}}>
        {btns.map(b=>(
          <button key={b} className="btn secondary" onClick={()=>onScore?.(b)}>{b}</button>
        ))}
        <button className="btn ghost" onClick={()=>onScore?.(0)}>No Score</button>
        <input className="input" placeholder="Type score…" onKeyDown={(e)=>{
          if (e.key==='Enter'){ const v = parseInt(e.currentTarget.value||'0',10); if(!isNaN(v)) onScore?.(v); e.currentTarget.value='' }
        }} />
      </div>
    </div>
  )
}
