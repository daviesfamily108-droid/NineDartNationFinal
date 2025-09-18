import React from 'react'
import Page from '../components/Layout/Page.jsx'
import { useStore } from '../state/store.jsx'

export default function Friends(){
  const { friends } = useStore()
  const within = (status)=> friends.filter(f=>f.status===status)
  const Row = ({f})=>(
    <div className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div><strong>{f.name}</strong> <span className="badge">{f.status}</span></div>
      {f.status==='ingame'? <button className="ghost">Spectate</button> : <button className="primary">Challenge</button>}
    </div>
  )
  return (
    <Page title="Friends">
      <h3>Online</h3>
      {within('online').map(f=><Row key={f.id} f={f}/>)}
      <h3>In-game</h3>
      {within('ingame').map(f=><Row key={f.id} f={f}/>)}
      <h3>Offline</h3>
      {within('offline').map(f=><Row key={f.id} f={f}/>)}
    </Page>
  )
}
