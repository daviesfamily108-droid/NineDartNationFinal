import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="brand" role="button" onClick={()=>{ window.location.href='/' }}>
        <span>🎯</span> Nine Dart Nation
      </div>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/online">Online</NavLink>
        <NavLink to="/offline">Offline</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/stats">Stats</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
      <div style="height:12px"></div>
      <a className="btn secondary" href="https://discord.gg/whu3ksQn" target="_blank" rel="noreferrer">Join our Discord</a>
    </aside>
  )
}
