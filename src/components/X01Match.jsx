import React, { useEffect, useMemo, useState } from 'react'
import { applyVisit, createMatch } from '../games/x01Core.js'
import X01Scorecard from './X01Scorecard.jsx'

function aiVisit(remaining){ if(remaining<=60) return [Math.min(remaining,40)]; const book=[140,100,81,60,45,41,26,20]; return [book[Math.floor(Math.random()*book.length)]] }

export default function X01Match({ startScore=501, legsToWin=3, players=[{id:'you',name:'You',you:true},{id:'ai',name:'AI Bot',ai:true}], starterIndex=0, mobileShowActiveOnly=true, onNetworkSend, onNetworkEvent }){
  const [match,setMatch]=useState(()=>createMatch({startScore,legsToWin,players,starterIndex}))
  const activePid = match.active
  const active = match.players[activePid]

  useEffect(()=>{
    if(!onNetworkEvent) return
    return onNetworkEvent((evt)=>{ if(evt?.type==='visit'){ setMatch(m=>applyVisit(m, evt.pid, evt.scores)) } })
  },[onNetworkEvent])

  useEffect(()=>{
    if(match.complete) return
    const a = match.players[match.active]
    if(!a.ai) return
    const t=setTimeout(()=>{ const scores=aiVisit(a.remaining); setMatch(m=>applyVisit(m, m.active, scores)) },700)
    return ()=>clearTimeout(t)
  },[match])

  const submitVisit=(scores)=>{
    setMatch(m=>applyVisit(m, m.active, scores))
    if(onNetworkSend) onNetworkSend({type:'visit', pid:activePid, scores})
  }

  const oneUp = useMemo(()=>{
    if(!mobileShowActiveOnly) return False
    if(typeof window==='undefined') return false
    return window.matchMedia('(max-width:900px)').matches
  },[mobileShowActiveOnly])

  return (
    <div className="card" style={{marginTop:12}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <div><div className="badge">X01</div><div style={{fontWeight:900,fontSize:18}}>Leg {match.leg} • Best of {legsToWin*2-1} (first to {legsToWin})</div></div>
        <div className="badge">Starter: {match.players[(match.leg-1)%match.players.length].name}</div>
      </div>

      {!oneUp ? (
        <div className="grid cols-2">
          {match.players.map((p,i)=>(
            <X01Scorecard key={p.id??i} player={p} isActive={i===match.active && !match.complete && !p.ai} onSubmitVisit={submitVisit} label={`Enter score for ${p.name}`} />
          ))}
        </div>
      ):(
        <>
          <X01Scorecard player={active} isActive={!match.complete && !active.ai} onSubmitVisit={submitVisit} label={`Enter score for ${active.name}`} />
          <div className="card" style={{marginTop:12}}>
            <div className="badge">Other player</div>
            {match.players.map((p,i)=> i!==match.active && (
              <div key={p.id??i} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid rgba(255,255,255,.06)'}}>
                <div style={{fontWeight:700}}>{p.name}</div>
                <div className="badge">Rem: {p.remaining} • Legs {p.legs}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {match.complete && (
        <div className="card" style={{marginTop:12,border:'1px solid rgba(255,255,255,.2)'}}>
          <div style={{fontWeight:900,fontSize:18}}>Leg won by {match.players.find(p=>(p.id??p.name)===match.winnerId)?.name}</div>
          {match.players.find(p=>(p.id??p.name)===match.winnerId)?.legs>=legsToWin ? <div className="badge" style={{marginTop:6}}>Match complete</div> : <div className="badge" style={{marginTop:6}}>Next leg started automatically</div>}
        </div>
      )}
    </div>
  )
}
