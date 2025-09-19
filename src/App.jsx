import React, { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Online from './pages/Online.jsx'
import Offline from './pages/Offline.jsx'
import Friends from './pages/Friends.jsx'
import Stats from './pages/Stats.jsx'
import Settings from './pages/Settings.jsx'
import Camera from './pages/Camera.jsx'
import Spectate from './pages/Spectate.jsx'
import Leaderboards from './pages/Leaderboards.jsx'
import Profile from './pages/Profile.jsx'
import Achievements from './pages/Achievements.jsx'
import MatchHistory from './pages/MatchHistory.jsx'
import Admin from './pages/Admin.jsx'
import Billing from './pages/Billing.jsx'
import Subscriptions from './pages/Subscriptions.jsx'
import Notifications from './pages/Notifications.jsx'
import Support from './pages/Support.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import { HelpWidget } from './components/HelpWidget.jsx'

export default function App(){
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="container">
      <aside className={`sidebar ${menuOpen?'open':''}`}>
        <div className="brand">🎯 Nine Dart Nation</div>
        <nav className="nav">
          <NavLink to="/" end onClick={()=>setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/online" onClick={()=>setMenuOpen(false)}>Online</NavLink>
          <NavLink to="/offline" onClick={()=>setMenuOpen(false)}>Offline</NavLink>
          <NavLink to="/friends" onClick={()=>setMenuOpen(false)}>Friends</NavLink>
          <NavLink to="/stats" onClick={()=>setMenuOpen(false)}>Stats</NavLink>
          <NavLink to="/leaderboards" onClick={()=>setMenuOpen(false)}>Leaderboards</NavLink>
          <NavLink to="/profile" onClick={()=>setMenuOpen(false)}>Profile</NavLink>
          <NavLink to="/achievements" onClick={()=>setMenuOpen(false)}>Achievements</NavLink>
          <NavLink to="/history" onClick={()=>setMenuOpen(false)}>Match History</NavLink>
          <NavLink to="/settings" onClick={()=>setMenuOpen(false)}>Settings</NavLink>
          <NavLink to="/notifications" onClick={()=>setMenuOpen(false)}>Notifications</NavLink>
          <NavLink to="/support" onClick={()=>setMenuOpen(false)}>Support</NavLink>
          <NavLink to="/terms" onClick={()=>setMenuOpen(false)}>Terms</NavLink>
          <NavLink to="/privacy" onClick={()=>setMenuOpen(false)}>Privacy</NavLink>
        </nav>
        <div className="discord">
          <a className="btn ghost" href="https://discord.gg/whu3ksQn" target="_blank">Join our Discord</a>
        </div>
      </aside>
      <main className="content">
        <div className="topbar">
          <button className="btn ghost" onClick={()=>setMenuOpen(s=>!s)} style={{marginRight:'auto'}}>☰</button>
          <NavLink to="/camera" className="btn" style={{marginRight:8}}>+ Camera</NavLink>
          <NavLink to="/billing" className="btn ghost">Subscribe</NavLink>
        </div>
        <div className="page">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/online" element={<Online/>} />
            <Route path="/offline" element={<Offline/>} />
            <Route path="/friends" element={<Friends/>} />
            <Route path="/stats" element={<Stats/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/camera" element={<Camera/>} />
            <Route path="/spectate/:id" element={<Spectate/>} />
            <Route path="/leaderboards" element={<Leaderboards/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/achievements" element={<Achievements/>} />
            <Route path="/history" element={<MatchHistory/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/billing" element={<Billing/>} />
            <Route path="/subscriptions" element={<Subscriptions/>} />
            <Route path="/notifications" element={<Notifications/>} />
            <Route path="/support" element={<Support/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/privacy" element={<Privacy/>} />
          </Routes>
        </div>
      </main>
      <HelpWidget/>
    </div>
  )
}