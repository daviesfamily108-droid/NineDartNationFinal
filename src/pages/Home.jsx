import React from 'react'
export default function Home(){
  return (
    <div className="grid" style={{gap:16}}>
      <div className="card"><strong>Welcome back, DartsWithG 🎯</strong><div style={{marginTop:6}}>3‑Dart Avg (monthly): <span className="kbd">00.00</span></div></div>
      <div className="cards">
        <div className="card"><div>Play Online</div><small>Join players worldwide</small></div>
        <div className="card"><div>Offline Mode</div><small>Practice against AI</small></div>
        <div className="card"><div>Friends</div><small>See who’s online</small></div>
      </div>
    </div>
  )
}