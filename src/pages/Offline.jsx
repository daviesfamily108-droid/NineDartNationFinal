import React from 'react'
import { useApp } from '../state/store.jsx'
import X01Match from '../components/X01Match.jsx'

export default function Offline(){
  const { user } = useApp()
  return (
    <div className="container">
      <h2>Offline</h2>
      <X01Match
        startScore={501}
        legsToWin={3}
        players={[
          { id:'you', name:user.name, you:true },
          { id:'ai', name:'AI Bot', ai:true }
        ]}
        starterIndex={0}
        mobileShowActiveOnly={true}
      />
    </div>
  )
}
