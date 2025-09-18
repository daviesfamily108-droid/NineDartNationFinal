import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import TopBar from './components/TopBar.jsx'
import Home from './pages/Home.jsx'
import Online from './pages/Online.jsx'
import Offline from './pages/Offline.jsx'
import Friends from './pages/Friends.jsx'
import Stats from './pages/Stats.jsx'
import Settings from './pages/Settings.jsx'
import Auth from './pages/Auth.jsx'
import Spectate from './pages/Spectate.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App(){
  return (
    <div style={{display:'flex'}}>
      <Sidebar/>
      <div style={{flex:1}}>
        <TopBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/online" element={<Online/>}/>
          <Route path="/offline" element={<Offline/>}/>
          <Route path="/friends" element={<Friends/>}/>
          <Route path="/stats" element={<Stats/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/spectate" element={<Spectate/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  )
}
