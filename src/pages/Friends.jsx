import React from 'react'
import { useApp } from '../state/store.jsx'
export default function Friends(){
  const { friends } = useApp()
  return (
    <div className="container">
      <h2>Friends</h2>
      <div className="grid cols-3" style={{marginTop:12}}>
        <div className="card">
          <h3>Online</h3>
          {friends.filter(f=>f.status==='online').map(f=>(<div key={f.id} className="row" style={{justifyContent:'space-between'}}><div>{f.name}</div><button className="btn">Challenge</button></div>))}
        </div>
        <div className="card">
          <h3>In‑Game</h3>
          {friends.filter(f=>f.status==='ingame').map(f=>(<div key={f.id} className="row" style={{justifyContent:'space-between'}}><div>{f.name}</div><button className="btn secondary">Spectate</button></div>))}
        </div>
        <div className="card">
          <h3>Offline</h3>
          {friends.filter(f=>f.status==='offline').map(f=>(<div key={f.id} className="row" style={{justifyContent:'space-between'}}><div>{f.name}</div><button className="btn ghost">Notify</button></div>))}
        </div>
      </div>
    </div>
  )
}
