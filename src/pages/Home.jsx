import React, { useState } from 'react'
import { useApp } from '../state/store.jsx'
import SubscribePopup from '../components/SubscribePopup.jsx'
import HelpWidget from '../components/HelpWidget.jsx'

export default function Home(){
  const { user, stats } = useApp()
  const [sub,setSub]=useState(false)

  return (
    <div className="container">
      <div className="row" style={{justifyContent:'space-between',alignItems:'center'}}>
        <h2 style={{margin:0}}>Welcome back, <span style={{color:'var(--brand)'}}>{user.name}</span> 🎯</h2>
        <div className="badge">Monthly 3‑Dart Avg: {stats.monthly3da.toFixed(2)}</div>
      </div>

      <div className="grid cols-2" style={{marginTop:12}}>
        <div className="card">
          <strong>Quick Access</strong>
          <div className="row" style={{marginTop:8}}>
            <a className="btn" href="/online">Play Online</a>
            <a className="btn secondary" href="/offline">Offline Mode</a>
            <a className="btn secondary" href="/friends">Friends</a>
          </div>
        </div>
        <div className="card">
          <strong>Best / Worst</strong>
          <div className="grid cols-2" style={{marginTop:8}}>
            <div className="card"><div className="badge">Best 3‑Dart</div><h2>—</h2><div className="badge" style={{opacity:.6}}>9‑Dart (locked)</div></div>
            <div className="card"><div className="badge">Worst 3‑Dart</div><h2>—</h2><div className="badge" style={{opacity:.6}}>9‑Dart (locked)</div></div>
          </div>
          <button className="btn" style={{marginTop:8}} onClick={()=>setSub(true)}>Subscribe</button>
        </div>
      </div>

      <HelpWidget />
      <SubscribePopup open={sub} onClose={()=>setSub(false)} />
    </div>
  )
}
