import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const modes = ['501','701','1001','Cricket','Around the Clock','Shanghai','Killer']

export default function Online(){
  const [open,setOpen]=useState(false)
  const [mode,setMode]=useState('501')
  const [best,setBest]=useState(3)
  return (
    <div className="grid">
      <div className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>You can play 2 free online games this week</div>
        <button className="btn" onClick={()=>setOpen(s=>!s)}>Create Game +</button>
      </div>
      {open && (
        <div className="card" style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}>
          <label>Mode
            <select value={mode} onChange={e=>setMode(e.target.value)} className="kbd" style={{marginLeft:6}}>
              {modes.map(m=><option key={m}>{m}</option>)}
            </select>
          </label>
          <label style={{marginLeft:12}}>Best of
            <input className="kbd" style={{marginLeft:6,width:64}} type="number" min="1" max="25" value={best} onChange={e=>setBest(+e.target.value||1)} />
          </label>
          <button className="btn">Add to World Lobby</button>
        </div>
      )}
      <div className="card">
        <strong>World Lobby</strong>
        <div className="card" style={{marginTop:8,display:'flex',justifyContent:'space-between'}}>
          <div><strong>Killer</strong> <small style={{color:'#94a3b8'}}>Host: You</small></div>
          <button className="btn">Join</button>
        </div>
      </div>
      <div className="card"><small>After a match is accepted, a VS page will show player photos, current avg, 180s, fav mode, and win record with quick chat buttons.</small></div>
      <div className="card"><Link to="/spectate/123" className="btn ghost">Spectate example</Link></div>
    </div>
  )
}