import React, { useState } from 'react'
import { useApp } from '../state/store.jsx'
export default function Stats(){
  const { stats } = useApp()
  const [mode,setMode]=useState('All')
  return (
    <div className="container">
      <div className="row" style={{justifyContent:'space-between',alignItems:'center'}}>
        <h2>Stats</h2>
        <select value={mode} onChange={e=>setMode(e.target.value)} className="btn secondary">
          <option>All</option><option>X01</option><option>Killer</option><option>Shanghai</option><option>AroundTheClock</option><option>Cricket</option>
        </select>
      </div>
      <div className="grid cols-2" style={{marginTop:12}}>
        <div className="card"><h3>180</h3>Count: {stats.hits['180']}</div>
        <div className="card"><h3>140</h3>Count: {stats.hits['140']}</div>
        <div className="card"><h3>100</h3>Count: {stats.hits['100']}</div>
        <div className="card"><h3>26</h3>Count: {stats.hits['26']}</div>
      </div>
    </div>
  )
}
