import React from 'react'
import { mockFriends } from '../utils/mockData.js'

export default function Friends(){
  const online = mockFriends.filter(f=>f.status==='online')
  const ingame = mockFriends.filter(f=>f.status==='ingame')
  const offline = mockFriends.filter(f=>f.status==='offline')
  return (
    <div className="grid">
      <Section title="Online" data={online} action="Challenge"/>
      <Section title="In-Game" data={ingame} action="Spectate"/>
      <Section title="Offline" data={offline} action="Notify"/>
    </div>
  )
}
function Section({title,data,action}){
  return (
    <div className="card">
      <strong>{title}</strong>
      <div className="cards" style={{marginTop:8}}>
        {data.map(f=>(
          <div className="card" key={f.id} style={{display:'flex',justifyContent:'space-between'}}>
            <div>{f.name}</div>
            <button className="btn">{action}</button>
          </div>
        ))}
      </div>
    </div>
  )
}