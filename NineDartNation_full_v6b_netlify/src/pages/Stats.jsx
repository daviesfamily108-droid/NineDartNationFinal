import React, { useState } from 'react'
import Page from '../components/Layout/Page.jsx'
import Panel from '../components/Cards/Panel.jsx'

const MODES = ['All','X01','Killer','Shanghai','Around the Clock']

export default function Stats(){
  const [mode,setMode]=useState('All')
  const items=[
    {label:'180', count:15},
    {label:'140', count:25},
    {label:'100', count:50},
    {label:'26', count:10},
  ]
  return (
    <Page title="Stats">
      <Panel title="Filter">
        <select className="kbd" value={mode} onChange={e=>setMode(e.target.value)}>
          {MODES.map(m=><option key={m}>{m}</option>)}
        </select>
      </Panel>
      <div className="grid cols-2" style={{marginTop:10}}>
        {items.map(i=> (
          <div className="card" key={i.label}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <strong>{i.label}</strong>
              <span className="badge">Count: {i.count}</span>
            </div>
          </div>
        ))}
      </div>
    </Page>
  )
}
