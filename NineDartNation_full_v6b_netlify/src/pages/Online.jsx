import React, { useState } from 'react'
import Page from '../components/Layout/Page.jsx'
import Panel from '../components/Cards/Panel.jsx'

export default function Online(){
  const [showCreate,setShowCreate] = useState(false)
  return (
    <Page title="Online" right={<button className="primary" onClick={()=>setShowCreate(s=>!s)}>Create Game +</button>}>
      {showCreate && (
        <Panel title="Create a game">
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            <select className="kbd"><option>X01</option><option>Killer (single)</option><option>Shanghai (single)</option><option>Around the Clock (single)</option></select>
            <input className="kbd" placeholder="Best of (e.g., 5)"/>
            <button>Host</button>
          </div>
        </Panel>
      )}
      <Panel title="World Lobby">
        <div className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><strong>Killer</strong> <span className="badge">Host: You • 11:05</span></div>
          <button className="primary">Join</button>
        </div>
      </Panel>
    </Page>
  )
}
