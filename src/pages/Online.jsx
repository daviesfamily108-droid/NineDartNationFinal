import React, { useState } from 'react'
import Countdown from '../components/Countdown.jsx'
export default function Online(){
  const [creating,setCreating]=useState(false)
  const [lobby,setLobby]=useState([])
  const create=(type)=>{ const id=Math.random().toString(36).slice(2,8).toUpperCase(); setLobby([{id,type,host:'You',createdAt:Date.now()},...lobby]); setCreating(false) }
  return (
    <div className="container">
      <div className="row" style={{justifyContent:'space-between',alignItems:'center'}}>
        <h2>Online</h2>
        <button className="btn" onClick={()=>setCreating(!creating)}>Create Game +</button>
      </div>
      {creating && <div className="card" style={{marginTop:12}}>
        <strong>Select mode</strong>
        <div className="row" style={{marginTop:8}}>
          <button className="btn" onClick={()=>create('X01')}>X01</button>
          <button className="btn secondary" onClick={()=>create('Killer')}>Killer</button>
          <button className="btn secondary" onClick={()=>create('AroundTheClock')}>Around the Clock</button>
          <button className="btn secondary" onClick={()=>create('Shanghai')}>Shanghai</button>
        </div>
      </div>}
      <div className="card" style={{marginTop:12}}>
        <div className="row" style={{justifyContent:'space-between',alignItems:'center'}}>
          <strong>World Lobby</strong>
          <Countdown seconds={30} onDone={()=>{}} />
        </div>
        <div style={{marginTop:8}}>
          {lobby.length===0 && <div className="badge">No games yet</div>}
          {lobby.map(g=>(<div key={g.id} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(255,255,255,.06)'}}><div><b>{g.type}</b> • Host: {g.host}</div><button className="btn">Join Now!</button></div>))}
        </div>
      </div>
    </div>
  )
}
