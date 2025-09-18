import React from 'react'
export default function ScoreRow({title, value}){
  return (
    <div style={{display:'flex',justifyContent:'space-between',gap:8,alignItems:'center',marginTop:6}}>
      <span className="badge">{title}</span>
      <span style={{fontWeight:700}}>{value}</span>
    </div>
  )
}
