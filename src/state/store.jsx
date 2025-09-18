import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const Ctx = createContext(null)
export const useApp = ()=> useContext(Ctx)

const defaultUser = { id:'you', name:'DartsWithG', avatar:'', subscribed:true }
const defaultFriends = [
  { id:'1', name:'Robin', status:'online' },
  { id:'2', name:'Casey', status:'offline' },
  { id:'3', name:'Alex', status:'ingame' }
]
const defaultStats = { monthly3da: 62.4, hits: { '180': 15, '140': 28, '100': 51, '26': 9 } }
const defaultSettings = { sfx:true, caller:true, camera:{ muted:true, facingMode:'environment' } }

export function AppProvider({children}){
  const [user,setUser] = useState(defaultUser)
  const [friends,setFriends] = useState(defaultFriends)
  const [stats,setStats] = useState(defaultStats)
  const [settings,setSettings] = useState(defaultSettings)

  useEffect(()=>{
    const raw = localStorage.getItem('ndn_settings')
    if(raw){ try{ setSettings(s=>({ ...s, ...JSON.parse(raw) })) }catch{} }
  },[])
  useEffect(()=>{
    localStorage.setItem('ndn_settings', JSON.stringify(settings))
  },[settings])

  const value = useMemo(()=>({user,setUser,friends,setFriends,stats,setStats,settings,setSettings}),[user,friends,stats,settings])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
