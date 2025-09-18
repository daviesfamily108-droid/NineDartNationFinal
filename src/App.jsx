import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import CameraWidget from './components/CameraWidget.jsx'
import Home from './pages/Home.jsx'
import Online from './pages/Online.jsx'
import Offline from './pages/Offline.jsx'
import Friends from './pages/Friends.jsx'
import Stats from './pages/Stats.jsx'
import Settings from './pages/Settings.jsx'

export default function App(){
  const [cam,setCam]=useState(false)
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Topbar onCamera={()=>setCam(true)} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/online" element={<Online/>} />
          <Route path="/offline" element={<Offline/>} />
          <Route path="/friends" element={<Friends/>} />
          <Route path="/stats" element={<Stats/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
      <CameraWidget open={cam} onClose={()=>setCam(false)} />
    </div>
  )
}
