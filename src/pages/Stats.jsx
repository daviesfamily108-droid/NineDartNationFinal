import React from 'react'
export default function Stats(){
  const items=[
    {label:'180',count:15},
    {label:'140',count:25},
    {label:'100',count:50},
    {label:'26',count:10},
  ]
  return (
    <div className="grid">
      <div className="cards">
        {items.map(it=>(
          <div className="card" key={it.label}>
            <div style={{fontSize:24,fontWeight:800}}>{it.label}</div>
            <small>Count: {it.count}</small>
          </div>
        ))}
      </div>
      <div className="card">
        <strong>Game Mode</strong>
        <div style={{marginTop:8,display:'flex',gap:12,flexWrap:'wrap'}}>
          <select className="kbd">
            <option>All</option>
            <option>501</option>
            <option>Cricket</option>
            <option>Around the Clock</option>
            <option>Shanghai</option>
            <option>Killer</option>
          </select>
          <div className="card">Most played: Around the Clock — 52 minutes</div>
        </div>
      </div>
    </div>
  )
}