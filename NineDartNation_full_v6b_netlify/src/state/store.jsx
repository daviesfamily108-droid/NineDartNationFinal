import React, {createContext, useContext, useMemo, useState, useEffect} from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const Ctx = createContext(null)

export function StoreProvider({children}){
  const [user, setUser] = useState(null)
  const [friends, setFriends] = useState([{id:1,name:'Robin',status:'online'},{id:2,name:'Casey',status:'offline'},{id:3,name:'Alex',status:'ingame'}])
  const [stats, setStats] = useState({ monthly3d: 0, scores: {180: 15, 140:25, 100:50, 26:10}})
  const [settings, setSettings] = useState({ sfx:true, caller:true })

  useEffect(() => {
    netlifyIdentity.init()
    const handler = (u)=> setUser(u)
    netlifyIdentity.on('login', handler)
    netlifyIdentity.on('logout', ()=>setUser(null))
    setUser(netlifyIdentity.currentUser())
    return () => {
      netlifyIdentity.off('login', handler)
      netlifyIdentity.off('logout')
    }
  }, [])

  const value = useMemo(()=>({user,setUser,friends,setFriends,stats,setStats,settings,setSettings}),[user,friends,stats,settings])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useStore = ()=> useContext(Ctx)
