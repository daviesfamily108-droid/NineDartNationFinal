import React from 'react'
export default function Topbar({onCamera}){
  return (
    <div className="topbar">
      <div className="brand" role="button" onClick={()=>{ window.location.href='/' }}>
        <span>🎯</span> Nine Dart Nation
      </div>
      <div className="row">
        <button className="btn" onClick={onCamera}>+ Camera</button>
      </div>
    </div>
  )
}
