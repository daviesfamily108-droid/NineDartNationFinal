import React from 'react'
import { useStore } from '../state/store.jsx'
import { openLogin, logout } from '../utils/netlifyIdentity.js'

export default function TopBar(){
  const { user } = useStore()
  const openSubscribe = async ()=>{
    const res = await fetch('/.netlify/functions/create-checkout', { method:'POST' })
    const { url } = await res.json()
    window.location.assign(url)
  }
  return (
    <div className="topbar">
      <div />
      <div style={{display:'flex', gap:8}}>
        {!user && <button className="ghost" onClick={openLogin}>Sign in</button>}
        {!!user && <button className="ghost" onClick={logout}>Logout</button>}
        <button className="primary" onClick={openSubscribe}>Subscribe</button>
      </div>
    </div>
  )
}
