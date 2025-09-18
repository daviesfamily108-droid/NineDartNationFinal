import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="brand">Nine Dart Nation 🎯</div>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/online">Online</NavLink>
        <NavLink to="/offline">Offline</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/stats">Stats</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <a href="https://discord.gg/whu3ksQn" target="_blank">Join our Discord</a>
      </nav>
    </aside>
  )
}
