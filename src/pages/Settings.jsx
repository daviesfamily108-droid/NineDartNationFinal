import React from 'react'
import { useApp } from '../state/store.jsx'
export default function Settings(){
  const { settings,setSettings } = useApp()
  return (
    <div className="container">
      <h2>Settings</h2>
      <div className="grid cols-2" style={{marginTop:12}}>
        <div className="card">
          <h3>Profile</h3>
          <div className="row"><button className="btn secondary">Change Photo</button><button className="btn secondary">Reset Password</button><button className="btn secondary">Cancel Subscription</button></div>
        </div>
        <div className="card">
          <h3>Preferences</h3>
          <label className="row"><input type="checkbox" checked={settings.caller} onChange={e=>setSettings(s=>({...s,caller:e.target.checked}))} /> Enable Caller</label>
          <label className="row"><input type="checkbox" checked={settings.sfx} onChange={e=>setSettings(s=>({...s,sfx:e.target.checked}))} /> Game SFX</label>
        </div>
        <div className="card">
          <h3>Admin Panel</h3>
          <div className="row"><button className="btn">View All Users</button><button className="btn">Manage Subscriptions</button><button className="btn">Site Stats</button></div>
        </div>
      </div>
    </div>
  )
}
