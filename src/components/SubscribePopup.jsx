import React from 'react'
export default function SubscribePopup({open,onClose}){
  if(!open) return null
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.6)',display:'grid',placeItems:'center',zIndex:60}} onClick={onClose}>
      <div className="card" style={{width:480}} onClick={e=>e.stopPropagation()}>
        <h3>Unlock everything</h3>
        <p>Subscribe to access all game modes and detailed stats. 3‑day trial, cancel anytime.</p>
        <div className="row">
          <button className="btn">Subscribe</button>
          <button className="btn secondary" onClick={onClose}>Close</button>
        </div>
        <small style={{opacity:.7,display:'block',marginTop:8}}>Close to continue without subscription (limited access).</small>
      </div>
    </div>
  )
}
