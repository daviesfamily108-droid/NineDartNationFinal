import React from 'react'
export default function Page({title, right, children}){
  return (
    <div className="page">
      <div className="topbar">
        <h2 style={{margin:0}}>{title}</h2>
        <div>{right}</div>
      </div>
      {children}
    </div>
  )
}
