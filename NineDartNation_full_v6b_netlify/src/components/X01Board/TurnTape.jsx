import React from 'react'
export default function TurnTape({log}){
  return (
    <div style={{height:90,overflow:'auto',background:'#0b2239',borderRadius:8,padding:8}}>
      {log.slice(-10).map((l,i)=>(<div key={i} style={{opacity:.9}}><span className="badge">{l.p}</span> {l.v}</div>))}
    </div>
  )
}
