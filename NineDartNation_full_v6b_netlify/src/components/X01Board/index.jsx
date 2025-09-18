import React, { useMemo, useState } from 'react'
import { compute3DAvg, nextToThrow } from '../../utils/scoring.js'
import ScoreRow from './ScoreRow.jsx'
import Keypad from './Keypad.jsx'
import TurnTape from './TurnTape.jsx'

export default function X01Board({start=501, legsToWin=3, players=['You','AI Bot']}){
  const [legsNeeded,setLegsNeeded] = useState(legsToWin)
  const [manual,setManual] = useState('')
  const [turn,setTurn] = useState(0)
  const [log,setLog]=useState([])
  const [state,setState]=useState(()=>players.map(n=>({
    name:n, remaining:start, visits:[], legs:0, bestLeg:null
  })))

  const enter = (score)=>{
    if(typeof score!=='number') return
    setState(s=>{
      const t = [...s]
      const me = {...t[turn]}
      const opp = {...t[nextToThrow(turn, t.length)]}
      const remain = me.remaining - score
      me.visits = [...me.visits, score]
      me.remaining = Math.max(0, remain)
      t[turn]=me; t[nextToThrow(turn,t.length)]=opp
      return t
    })
    setLog(l=>[...l,{p:players[turn], v:score}])
    next()
  }

  const next = ()=>{
    setState(s=>{
      const me = s[turn]
      if(me.remaining===0){
        me.legs += 1
        me.bestLeg = me.bestLeg==null? me.visits.length : Math.min(me.bestLeg, me.visits.length)
        // reset both for new leg
        const ns = s.map(p=>({...p, remaining:start, visits:[]}))
        setTurn(nextToThrow(turn, s.length))
        return ns
      }
      setTurn(nextToThrow(turn, s.length))
      return s
    })
  }

  const onHit = (k)=> enter(k)
  const submitManual = ()=>{
    const v = parseInt(manual,10)
    if(!isNaN(v)) onHit(v)
    setManual('')
  }

  const avg = (p)=> compute3DAvg(p.visits)
  return (
    <div className="card" style={{padding:16}}>
      <div className="grid cols-2">
        {state.map((p,i)=>(
          <div key={i} className="panel">
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div><strong>{p.name}</strong> {i===turn && <span className="badge">TO THROW</span>}</div>
              <div><span className="badge">Remaining</span> <strong style={{fontSize:28}}>{p.remaining}</strong></div>
            </div>
            <div className="grid cols-3" style={{marginTop:8}}>
              <ScoreRow title="3-Dart Avg" value={avg(p).toFixed(2)} />
              <ScoreRow title="Best Leg" value={p.bestLeg ?? '—'} />
              <ScoreRow title="Legs" value={p.legs} />
            </div>
          </div>
        ))}
      </div>

      <div style={{margin:'12px 0'}}>
        <TurnTape log={log}/>
      </div>

      <div className="card">
        <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:10}}>
          <span className="badge">Enter score</span>
          <input value={manual} onChange={e=>setManual(e.target.value)} placeholder="Type score" className="kbd" style={{background:'#06172b',color:'#fff'}}/>
          <button onClick={submitManual}>Add</button>
        </div>
        <Keypad onHit={onHit}/>
      </div>
    </div>
  )
}
