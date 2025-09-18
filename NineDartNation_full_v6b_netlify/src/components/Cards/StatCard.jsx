import React from 'react'
export default function StatCard({title,value,sub}){
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>{title}</div>
        <strong>{value}</strong>
      </div>
      {sub && <div className="muted" style={{opacity:0.7,marginTop:4}}>{sub}</div>}
    </div>
  )
}
