import React from 'react'
export default function Keypad({onHit}){
  const keys=[180,140,100,81,60,45,41,26,20,1,0]
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
      {keys.map(k=>(<button key={k} onClick={()=>onHit(k)}>{k===0?'No Score':k}</button>))}
    </div>
  )
}
