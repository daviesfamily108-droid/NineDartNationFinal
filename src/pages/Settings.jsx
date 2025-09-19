import React from 'react'
export default function Settings(){
  return (
    <div className="grid">
      <div className="cards">
        <div className="card"><button className="btn">Change Profile Photo</button></div>
        <div className="card"><button className="btn">Reset Password</button></div>
        <div className="card"><button className="btn">Cancel Subscription</button></div>
        <div className="card"><button className="btn">Delete Account</button></div>
      </div>
      <div className="card">
        <strong>Admin Panel</strong>
        <div className="cards" style={{marginTop:8}}>
          <div className="card">View All Users</div>
          <div className="card">Manage Subscriptions</div>
          <div className="card">Game Mode Settings</div>
          <div className="card">Site Stats</div>
        </div>
      </div>
    </div>
  )
}