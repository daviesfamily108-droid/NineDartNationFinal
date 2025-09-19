import React from 'react'
import { useParams } from 'react-router-dom'
export default function Spectate(){
  const {id}=useParams()
  return (
    <div className="card">
      <strong>Spectating match {id}</strong>
      <div className="card" style={{marginTop:8}}>Video and scoreboard will appear here (read-only).</div>
    </div>
  )
}