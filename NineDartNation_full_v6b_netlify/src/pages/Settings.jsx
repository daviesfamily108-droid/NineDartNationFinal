import React from 'react'
import Page from '../components/Layout/Page.jsx'
import HelpWidget from '../components/HelpWidget.jsx'

export default function Settings(){
  return (
    <Page title="Settings">
      <div className="grid cols-2">
        <div className="panel">
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            <button className="ghost">Change Profile Photo</button>
            <button className="ghost">Reset Password</button>
            <button className="ghost">Cancel Subscription</button>
            <button className="ghost" style={{background:'#3c0e18',borderColor:'#6f1e30'}}>Delete Account</button>
          </div>
        </div>
        <div className="panel">
          <strong>Admin Panel</strong>
          <ul>
            <li>View All Users</li>
            <li>Manage Subscriptions</li>
            <li>Game Mode Settings</li>
            <li>Site Stats</li>
          </ul>
        </div>
      </div>
      <HelpWidget/>
    </Page>
  )
}
